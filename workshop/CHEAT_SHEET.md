# Cheat sheet — Partner Git Practice

Print or keep this open. Copy-paste is encouraged.

**Links (facilitator fills in):**

- Repo: `https://github.com/AjSchaff/partner-git-practice`
- Live site: `https://partner-git-practice.vercel.app`
- What is a PR?: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

---

## Mental model

| Word | Means |
| --- | --- |
| GitHub | Shared Drive for code |
| git | Version history on your laptop + sync with GitHub |
| branch | Your copy of the project to edit safely |
| commit | A saved snapshot with a short message |
| push | Send your commits to GitHub |
| pull | Download latest from GitHub |
| pull request (PR) | “Please accept my edits into `main`” |
| merge | Accept the PR into `main` |
| Vercel | Live website that updates when `main` changes |
| Node / npm | Engine + installer so `npm run dev` works locally |

---

## Terminal basics

```bash
pwd          # where am I?
ls           # list files
cd ~/Dev     # go to Dev folder
cd partner-git-practice
```

Stop a running dev server: `Ctrl + C`

---

## Git commands we use

```bash
git clone https://github.com/AjSchaff/partner-git-practice.git
git pull
git checkout -b YOURNAME-homepage
git branch
git status
git diff
git add .
git commit -m "Update homepage headline with my name"
git push -u origin HEAD
git checkout main
```

First-time identity (only if Git asks):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## Node commands

```bash
npm install
npm run dev
```

---

## Claude Code

From inside the project folder:

```bash
claude
```

Prompt:

> In this repo, change the homepage headline to include my first name. Only edit the homepage file (`index.html`). Do not change dependencies or other files.

Edit by hand if needed: open `index.html` → change the text inside `<h1 id="headline">...</h1>`.

---

## The loop

**pull → branch → Claude change → commit → push → PR → merge → Vercel**
