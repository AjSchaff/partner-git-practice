# Facilitator setup (do before sending pre-work)

## 1. Publish this folder as its own GitHub repo

This project currently lives inside the Double workspace for drafting. For the workshop it should be a **standalone** public (or org) repo named `partner-git-practice`.

```bash
# From this folder, after copying it somewhere outside the Double monorepo if needed:
cd partner-git-practice
git init -b main
git add .
git commit -m "Initial partner git practice site"
gh auth login   # if needed
gh repo create partner-git-practice --public --source=. --remote=origin --push
```

Invite every partner as a **collaborator** (or add them to the org team) so they can push branches and open PRs.

**Published values** (also in PREWORK / FOLLOW_ALONG / CHEAT_SHEET):

- Repo URL: `https://github.com/AjSchaff/partner-git-practice`
- Clone URL: `https://github.com/AjSchaff/partner-git-practice.git`
- Live site: `https://partner-git-practice.vercel.app`
- Demo PR: `https://github.com/AjSchaff/partner-git-practice/pull/1`

## 2. Connect Vercel (auto-deploy on `main`)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New Project** → Import `partner-git-practice`.
3. Framework preset should detect **Vite**. Build command `npm run build`, output `dist`.
4. Deploy. Copy the production URL (e.g. `https://partner-git-practice.vercel.app`).
5. Confirm: Settings → Git → Production Branch = `main`, auto-deploy on.

Paste the live URL into PREWORK, FOLLOW_ALONG, and CHEAT_SHEET placeholders.

CLI alternative (if already logged in):

```bash
cd partner-git-practice
vercel link
vercel --prod
```

Prefer the GitHub integration so partners see “push → deploy” without using the CLI.

## 3. Sample open PR (optional safety net)

So you can demo merge even if nobody finishes a PR in time:

```bash
git checkout -b demo-merge-example
# Tiny harmless edit, e.g. tweak the .hint paragraph in index.html
git add index.html
git commit -m "Demo: sample PR for merge walkthrough"
git push -u origin HEAD
gh pr create --title "Demo: sample merge walkthrough" --body "Facilitator safety-net PR. Safe to merge during the session."
```

Leave it open until the Merge + Vercel segment; merge it live if needed.

## 4. Shared follow-along doc

Copy [FOLLOW_ALONG.md](./FOLLOW_ALONG.md) into a Google Doc / Notion page partners can see beside Terminal. Replace all `REPLACE_ME` placeholders first.

## 5. Day-of checklist

- [ ] Everyone replied “green” on pre-work (or you pair stragglers)
- [ ] Repo invites accepted
- [ ] Vercel production URL loads
- [ ] Sample PR still open (or you have a second account ready)
- [ ] Cheat sheet printed or shared
- [ ] Helper assigned if more than ~4 people
