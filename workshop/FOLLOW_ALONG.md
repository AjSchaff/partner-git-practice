# Follow-along: 60-minute workshop

Facilitator leads. You copy-paste. It is OK to be slow — raise your hand instead of improvising.

**Replace these before class (facilitator):**

- Repo URL: `REPLACE_ME_REPO_URL`
- Clone command: `git clone REPLACE_ME_CLONE_URL`
- Live site: `REPLACE_ME_VERCEL_URL`

---

## 0–5 min — Goal

Today you will:

1. Run this site on your laptop (Node).
2. Create a **branch**, change the homepage with **Claude Code**, **commit**, and **push**.
3. Open a **pull request (PR)** and see a **merge** update the **Vercel** live site.

Cheat sheet: [CHEAT_SHEET.md](./CHEAT_SHEET.md)

---

## 5–15 min — Terminal survival + open the repo

### Open Terminal

- Mac: Spotlight (`Cmd + Space`) → type `Terminal` → Enter  
  **or** open the Terminal panel inside Cursor.

### Where am I?

Paste each line, then press Enter:

```bash
pwd
```

```bash
ls
```

```bash
cd ~/Dev
```

```bash
pwd
```

You should now be inside your `Dev` folder.

### Clone the practice repo

```bash
git clone REPLACE_ME_CLONE_URL
```

```bash
cd partner-git-practice
```

```bash
ls
```

You should see files like `index.html` and `package.json`.

### Install and run with Node

```bash
npm install
```

Wait until it finishes (may take a minute).

```bash
npm run dev
```

1. Look for a line like `Local: http://localhost:5173/`.
2. Open that link in your browser.
3. You should see the headline **Welcome to Partner Practice**.

### Stop the server

Click in the Terminal window, then press:

`Ctrl + C`

(You can start it again later with `npm run dev`.)

---

## 15–30 min — Git vocabulary (hands on)

### Get latest from GitHub (pull)

```bash
git pull
```

### Create your own branch (checkout)

Replace `YOURNAME` with your first name in lowercase (example: `maya-homepage`):

```bash
git checkout -b YOURNAME-homepage
```

### Confirm which branch you are on

```bash
git branch
```

The line with `*` is your current branch. It should **not** say only `main` for the next steps.

**Rule for this workshop:** do not edit `main` directly. Branch → change → push → PR → merge.

---

## 30–45 min — Claude Code guided change

### Start Claude Code

From inside `partner-git-practice`:

```bash
claude
```

(If your install uses a different command, use that instead.)

### Paste this exact prompt

> In this repo, change the homepage headline to include my first name. Only edit the homepage file (`index.html`). Do not change dependencies or other files.

Accept Claude’s edit when prompted.

### See what changed

```bash
git status
```

```bash
git diff
```

You should see the `<h1>` text in `index.html` updated.

### Optional: preview locally

```bash
npm run dev
```

Refresh the browser, confirm your name is in the headline, then `Ctrl + C` to stop.

### Commit (save a snapshot)

```bash
git add .
```

```bash
git commit -m "Update homepage headline with my name"
```

If Git asks for your name/email the first time:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then run the `git commit` command again.

### Push (send your branch to GitHub)

```bash
git push -u origin HEAD
```

Sign in with GitHub in the browser if asked.

### Open a pull request

1. Open `REPLACE_ME_REPO_URL` in your browser.
2. GitHub usually shows a banner: **Compare & pull request** — click it.
3. Title can stay as-is or match your commit message.
4. Click **Create pull request**.

**Fallback if Claude Code fails:** open `index.html` in Cursor, change the text inside `<h1 id="headline">...</h1>` by hand, then continue from `git status`.

---

## 45–55 min — Merge + Vercel

Facilitator walks through a PR page:

- **Files changed** — what will merge
- **Conversation** — discussion
- **Merge pull request** — lands the change on `main`

When a PR is merged:

1. Switch back to `main` and pull:

```bash
git checkout main
```

```bash
git pull
```

2. Open the live site: `REPLACE_ME_VERCEL_URL`
3. Refresh until you see the updated headline (Vercel may take ~30–60 seconds).
4. Facilitator shows the Vercel dashboard → Deployments = “website updated from GitHub”.

---

## 55–60 min — Close

**The loop:** pull → branch → Claude change → commit → push → PR → merge → Vercel

**Homework:** finish merging your own PR (or open a second tiny text change) and share the live URL in Slack.

Keep [CHEAT_SHEET.md](./CHEAT_SHEET.md) for next time.
