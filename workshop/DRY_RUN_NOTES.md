# Dry-run notes (facilitator)

Run through this once on a clean machine path (or a fresh clone) before the live session. Record actual timings in the “Actual” column.

## Timing log

| Segment | Plan | Actual | Notes |
| --- | --- | --- | --- |
| Welcome + goal | 0–5 | | Point at cheat sheet early |
| Terminal + clone + npm install + npm run dev | 5–15 | | Slowest risk: npm install / Wi‑Fi |
| Git verbs + create branch | 15–30 | | Stay on GitHub UI for “branch” visual |
| Claude Code change + commit + push + open PR | 30–45 | | Have Cursor fallback ready |
| Merge + Vercel refresh | 45–55 | | Sample PR is the safety net |
| Close + homework | 55–60 | | |

## Dry-run procedure (fresh path)

```bash
rm -rf /tmp/partner-git-practice-dryrun
mkdir -p /tmp/partner-git-practice-dryrun
cd /tmp/partner-git-practice-dryrun

# After the repo is on GitHub, use clone. Until then, copy the local project:
# cp -R /path/to/partner-git-practice .
# Or: git clone https://github.com/AjSchaff/partner-git-practice.git

cd partner-git-practice
npm install
npm run dev
# Confirm headline in browser, Ctrl+C

git checkout -b dryrun-homepage
# Simulate Claude: edit index.html h1 to include a name
git add .
git commit -m "Update homepage headline with my name"
# git push -u origin HEAD   # when remote exists
# open PR on GitHub, merge, confirm Vercel
```

## Known failure modes and fallbacks

| Failure | What you do |
| --- | --- |
| `node` / `npm` not found | Pair with neighbor; do not debug Node installs mid-session |
| `git clone` auth fails | Switch to HTTPS URL; or zip-download repo from GitHub UI as last resort |
| `npm install` slow/fails | Share a hotspot; or have a USB/pre-cached `node_modules` only as emergency (prefer fix network) |
| Claude Code not logged in | Hand-edit `index.html` in Cursor; continue git flow |
| `git push` rejected / no permission | Confirm collaborator invite; facilitator pushes from their machine only for demo |
| Merge conflict on PR | Do not teach rebase. Close conflicting PR; partner re-branches from fresh `main` after class if needed |
| Vercel not updating | Check Deployments tab; wait 60s; hard-refresh browser; confirm merge was into `main` |
| Laptop dead / missing tools | Screen-share with neighbor; they drive, partner narrates |

## Facilitator voice cues (keep repeating)

1. “We’re on a branch, not `main`.”
2. “`git status` before every commit.”
3. “Push sends to GitHub; merge on the website updates Vercel.”
4. “Copy-paste only — don’t invent commands.”

## Success check after dry-run

- [ ] `npm install` + `npm run dev` works from a clean folder
- [ ] Headline edit is obvious in `index.html`
- [ ] Commit + branch naming works
- [ ] (When published) push → PR → merge → Vercel URL updates
- [ ] Pre-work / follow-along / cheat sheet placeholders updated with real URLs
