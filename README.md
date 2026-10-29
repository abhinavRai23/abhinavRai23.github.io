## My Portfolio

Created **React** based basic portfolio. A free template built with Bootstrap was used. 

<center>
<a href="https://abhinavrai23.github.io">
	<img src="./src/images/preview.png" width="480" />
</a>
</center>
<br>
<br>

### If you want to use the same template:- 
* Fork the repo
* change image from `./src/images/profile.webp`
* update `data.json` from `./src/data.json`

### Deployment via GitHub Actions

This project automatically builds and deploys to **GitHub Pages** using GitHub Actions on every push to `main`:

1. In repository **Settings** → **Pages** → **Build and deployment**:
   - Set **Source** to **GitHub Actions**.
2. Any push to `main` triggers `.github/workflows/deploy.yml`:
   - Sets up Node.js 24 and pnpm.
   - Runs `pnpm install --frozen-lockfile` and `pnpm run build`.
   - Deploys `dist` directly to GitHub Pages with zero manual steps.
