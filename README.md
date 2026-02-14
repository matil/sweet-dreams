# Sweet Dreams

A lightweight, dependency-free web app that serves a calming bedtime UI and randomized sleep tips.

## Use locally (no install required)

Because this is a static site, you can open `index.html` directly in your browser.

For a local server, you can also run:

```bash
python3 -m http.server 3000
```

Then open <http://localhost:3000>.

## Host on GitHub Pages

This repository now includes an automated GitHub Pages workflow:

- Workflow file: `.github/workflows/deploy-pages.yml`
- Deploy trigger: every push to `main`

### One-time setup

1. Push this repository to GitHub.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` (or adjust the workflow branch trigger).
5. Push to `main`.

After the workflow runs, your site will be available at:

- `https://<your-github-username>.github.io/<repo-name>/`

## How to use the app

1. Open the site.
2. Click **Get bedtime tip**.
3. A random sleep tip appears under the button.
4. Click again to rotate through more tips.

## Optional: syntax check

If you want to run syntax checks with Node:

```bash
npm test
```
