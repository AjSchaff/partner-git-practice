// ==========================================================================
// Catch the unicorn
// A 30-second mini game: click the runaway unicorn before it reaches
// production. Misses get roasted, catches get hyped, both in a speech
// bubble inside the play area.
//
// The page markup for the game is the <section class="squash"> block in
// index.html; the styles are in bug-squash.css.
// ==========================================================================
import "./bug-squash.css"

// ---- Settings --------------------------------------------------------------
const GAME_MS = 30000           // game length: 30 seconds
const SIZE = 48                 // unicorn size in pixels (matches the CSS)
const GOLDEN_CHANCE = 0.12      // about 1 in 8 unicorns is golden
const BEST_KEY = "bugSquashBest" // where the best score is saved in the browser

// ---- What the game says ------------------------------------------------------
// One line is picked at random each time. Add your own to any list.

// Said when you catch a regular unicorn.
const HITS = [
  "Yo, that won't happen again.",
  "Sheesh! Caught it.",
  "Caught it. No cap.",
  "Back to the stable with you.",
  "Unicorn said \"it's in production\" and you said \"not today.\"",
  "Clean. Somebody get this person a raise.",
  "Works on my machine.",
  "Reviewed, approved, caught.",
  "Rolled back to a version that worked.",
]

// Said when you catch a golden unicorn (worth 3 points).
const GOLDEN_HITS = [
  "Golden unicorn! That was a Friday 4:59pm deploy. +3",
  "Golden unicorn! Caught it before it hit main. +3",
]

// Said when you click and miss.
const MISSES = [
  "Nice try.",
  "No way, Idaho.",
  "Swing and a miss.",
  "Bruh.",
  "Not even close, bestie.",
  "Was that on purpose?",
  "The unicorn is literally laughing at you.",
  "Oof. Big oof.",
  "My grandma clicks faster, and she uses a trackpad.",
  "You had one job.",
  "Missed. The unicorn opened a ticket about you.",
  "Missed. The unicorn left a comment: \"LGTM.\"",
]

// ---- Page elements -------------------------------------------------------------
const $ = (id) => document.getElementById(id)
const arena = $("sq-arena")       // the play area
const unicorn = $("sq-bug")       // the thing you click
const overlay = $("sq-overlay")   // "Ready?" / "Time's up" screen
const startBtn = $("sq-start")
const scoreEl = $("sq-score")
const timeEl = $("sq-time")
const bestEl = $("sq-best")
const srLog = $("sq-log")         // invisible copy of each message, for screen readers

// ---- Game state ------------------------------------------------------------------
// Everything that changes while you play lives here.
const state = {
  running: false,
  score: 0,
  endsAt: 0,       // when the current game ends (ms timestamp)
  hop: null,       // timer for the unicorn's next move
  tick: null,      // timer for the countdown clock
  x: 0,            // unicorn position inside the play area
  y: 0,
  golden: false,   // is the current unicorn golden?
}
let currentBubble = null // only one speech bubble on screen at a time

const pick = (list) => list[Math.floor(Math.random() * list.length)]

// ---- Best score ------------------------------------------------------------------
// Saved in this browser only. The try/catch keeps the game working in
// private windows, where saving can be blocked.
function readBest() {
  try { return Number(localStorage.getItem(BEST_KEY)) || 0 } catch { return 0 }
}

function saveBest(value) {
  try { localStorage.setItem(BEST_KEY, String(value)) } catch { /* private mode: skip */ }
}

// ---- Moving the unicorn ------------------------------------------------------
// Unicorns get faster as you score: 1.1s between hops, down to 0.38s.
const hopDelay = () => Math.max(380, 1100 - state.score * 35)

// Pick a random spot in the play area and glide there
// (or jump straight there when `instant` is true).
function moveUnicorn(instant = false) {
  const nx = Math.random() * (arena.clientWidth - SIZE)
  const ny = Math.random() * (arena.clientHeight - SIZE)
  const tilt = nx > state.x ? 10 : -10 // lean the way it's running
  state.x = nx
  state.y = ny
  unicorn.style.transitionDuration = instant ? "0ms" : `${Math.round(hopDelay() * 0.8)}ms`
  unicorn.style.transform = `translate(${nx}px, ${ny}px) rotate(${tilt}deg)`
}

// Keep the unicorn moving on a loop until the game ends.
function scheduleHop() {
  clearTimeout(state.hop)
  state.hop = setTimeout(() => {
    if (!state.running) return
    moveUnicorn()
    scheduleHop()
  }, hopDelay())
}

// A fresh unicorn appears somewhere new; sometimes it's golden.
function spawnUnicorn() {
  state.golden = Math.random() < GOLDEN_CHANCE
  unicorn.classList.toggle("golden", state.golden)
  unicorn.setAttribute("aria-label", state.golden ? "Golden unicorn, worth 3 points" : "Unicorn, catch it")
  moveUnicorn(true)
  scheduleHop()
}

// ---- Speech bubbles and score pops ---------------------------------------------
// Show `text` in a bubble just above the point (x, y) inside the play area.
// `kind` is "hit" (rainbow outline) or "miss" (purple roast).
function say(text, x, y, kind) {
  if (currentBubble) currentBubble.remove()
  const bubble = document.createElement("div")
  bubble.className = `squash-bubble ${kind}`
  bubble.textContent = text
  arena.appendChild(bubble)
  // Keep the bubble inside the play area; flip it below the point near the top edge.
  const w = bubble.offsetWidth
  const h = bubble.offsetHeight
  const left = Math.min(Math.max(8, x - w / 2), arena.clientWidth - w - 8)
  const top = y - h - 14 < 8 ? y + 22 : y - h - 14
  bubble.style.left = `${left}px`
  bubble.style.top = `${top}px`
  currentBubble = bubble
  srLog.textContent = text
  setTimeout(() => bubble.remove(), 1600)
}

// The "+1" / "+3" that floats up where you caught the unicorn.
function pop(text, x, y) {
  const el = document.createElement("div")
  el.className = "squash-splat"
  el.textContent = text
  el.style.left = `${x}px`
  el.style.top = `${y}px`
  arena.appendChild(el)
  setTimeout(() => el.remove(), 750)
}

// ---- Clicks ------------------------------------------------------------------
// Clicked the unicorn: add points, hype it up, spawn the next one.
function catchIt(event) {
  event.preventDefault()
  event.stopPropagation() // stop the play area from also counting this as a miss
  if (!state.running) return
  const points = state.golden ? 3 : 1
  state.score += points
  scoreEl.textContent = state.score
  const box = unicorn.getBoundingClientRect()
  const area = arena.getBoundingClientRect()
  const cx = box.left - area.left + box.width / 2
  const cy = box.top - area.top + box.height / 2
  pop(`+${points}`, cx - 12, cy - 12)
  say(state.golden ? pick(GOLDEN_HITS) : pick(HITS), cx, cy, "hit")
  spawnUnicorn()
}

// Clicked anywhere else in the play area: roast them where they clicked.
function miss(event) {
  if (!state.running) return
  const area = arena.getBoundingClientRect()
  say(pick(MISSES), event.clientX - area.left, event.clientY - area.top, "miss")
}

// ---- Start and end ---------------------------------------------------------------
function endGame() {
  state.running = false
  clearTimeout(state.hop)
  clearInterval(state.tick)
  unicorn.hidden = true
  if (currentBubble) currentBubble.remove()
  timeEl.textContent = "0.0"
  // Save a new best score if they beat the old one.
  const best = readBest()
  const isBest = state.score > best
  if (isBest) saveBest(state.score)
  bestEl.textContent = Math.max(best, state.score)
  overlay.innerHTML = `
    <div>Time's up</div>
    <div class="big">${state.score} unicorn${state.score === 1 ? "" : "s"} caught</div>
    ${isBest ? "<div>New personal best!</div>" : ""}
  `
  overlay.hidden = false
  startBtn.textContent = "Play again"
}

function startGame() {
  // Clear any game already running (the button doubles as Restart).
  clearTimeout(state.hop)
  clearInterval(state.tick)
  state.running = true
  state.score = 0
  state.endsAt = performance.now() + GAME_MS
  scoreEl.textContent = "0"
  overlay.hidden = true
  unicorn.hidden = false
  startBtn.textContent = "Restart"
  spawnUnicorn()
  say("Go! Catch them before they ship.", arena.clientWidth / 2, arena.clientHeight / 2, "hit")
  // Update the countdown 10 times a second; end the game at zero.
  state.tick = setInterval(() => {
    const left = Math.max(0, state.endsAt - performance.now())
    timeEl.textContent = (left / 1000).toFixed(1)
    if (left <= 0) endGame()
  }, 100)
}

// ---- Wire it all up ----------------------------------------------------------------
bestEl.textContent = readBest()
startBtn.addEventListener("click", startGame)
unicorn.addEventListener("pointerdown", catchIt)
// Keyboard players can Tab to the unicorn and press Enter or Space.
unicorn.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") catchIt(e) })
arena.addEventListener("pointerdown", miss)
