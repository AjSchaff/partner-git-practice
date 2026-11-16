# Pre-work checklist (do 24–48 hours before the session)

Please finish this **before** we meet. The live hour assumes these tools already work. Reply in Slack/email with a screenshot or the output of the verify commands when you are done.

**Time estimate:** 20–40 minutes.

---

## 1. GitHub account

1. Create or sign in at [github.com](https://github.com).
2. Use the email you use for work.
3. Accept the invite to the practice repo when you receive it:
   - **Repo:** `https://github.com/AjSchaff/partner-git-practice`

---

## 2. Create a folder for projects

On a Mac:

1. Open **Finder**.
2. Go to your home folder (your name in the sidebar).
3. Create a new folder named `Dev`.

We will use this folder in the session.

---

## 3. Install Node.js (LTS)

1. Go to [nodejs.org](https://nodejs.org).
2. Download the **LTS** installer for your computer (macOS).
3. Run the installer; accept the defaults.

**Verify** — open **Terminal** (Spotlight → type `Terminal`) and paste:

```bash
node -v
npm -v
```

You should see version numbers (for example `v22.x.x` and `10.x.x`). If you see `command not found`, quit Terminal, reopen it, and try again. Still stuck? Message the facilitator before the session.

---

## 4. Install Git

macOS often prompts to install developer tools the first time you run `git`.

In Terminal:

```bash
git --version
```

If a dialog offers to install tools, click **Install** and wait. Run the command again until you see a version number.

Optional: install [GitHub Desktop](https://desktop.github.com) if you want a visual backup. We will still use Terminal in class.

---

## 5. Sign in to GitHub from your machine (HTTPS or SSH)

Pick one path.

### Option A — HTTPS (simpler for most people)

When you `git push` later, GitHub will ask you to sign in via browser. You can also install the GitHub CLI:

```bash
brew install gh
gh auth login
```

(If you do not have Homebrew, skip CLI for now; browser login during the session is fine.)

### Option B — SSH

Follow GitHub’s guide: [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

---

## 6. Install Claude Code and log in

1. Follow Anthropic’s current install instructions: [Claude Code](https://docs.anthropic.com/en/docs/claude-code).
2. Complete login in Terminal until Claude Code reports you are authenticated.

**Verify** (exact command may match your install method):

```bash
claude --version
```

If that fails, try whatever command the install docs give you, then message the facilitator with the error text.

---

## 7. Vercel account + GitHub connected

1. Sign up / sign in at [vercel.com](https://vercel.com) using **Continue with GitHub**.
2. Approve access to GitHub if asked.
3. You do **not** need to create a project yourself — the facilitator already linked the practice repo.
4. Bookmark the live site (filled in by facilitator):
   - **Live site:** `https://partner-git-practice.vercel.app`

---

## 8. Recommended: Cursor or VS Code

Install [Cursor](https://cursor.com) or [VS Code](https://code.visualstudio.com) so you can see files in a friendly editor. We will still type Terminal commands from the follow-along doc.

---

## Green-light checklist (reply when all are true)

- [ ] `node -v` and `npm -v` print versions
- [ ] `git --version` prints a version
- [ ] GitHub account works; practice repo invite accepted
- [ ] Claude Code installed and logged in
- [ ] Vercel signed in with GitHub
- [ ] `Dev` folder exists in your home directory
- [ ] Cursor or VS Code installed (recommended)

See you in the session — bring your laptop charger.
