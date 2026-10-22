# Jake Allen C. Ursua — Portfolio

A responsive dark-themed React + Vite portfolio starter.

## Run locally
1. Install Node.js (LTS) from https://nodejs.org/
2. Open this folder in PyCharm.
3. Open Terminal in PyCharm and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed in the terminal (usually http://localhost:5173).

## Build check

```bash
npm run build
```

## GitHub Pages deployment
This project is configured for a repository named `portfolio` under the GitHub account `Ursua_JakeAllen`.

1. Create a GitHub repository named `portfolio`.
2. Push the project to its `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for the deployment workflow to finish.
6. The expected site URL is `https://ursua-jakeallen.github.io/portfolio/` if the account's canonical username is `Ursua-JakeAllen`. GitHub usernames are case-insensitive in URLs; confirm the actual profile URL if it differs.

## Personalize before publishing
- Replace sample projects and tags in `src/App.jsx` with real work.
- Edit the skill list to include only technologies you actually know or are learning.
- Add your email and social links when you are ready.
- Update `vite.config.js` `base` to `/YOUR-REPOSITORY-NAME/` if the repository is not named `portfolio`.
- The GitHub username/profile URL in `src/App.jsx` is set to `https://github.com/Ursua_JakeAllen`; confirm it matches your actual GitHub profile.
