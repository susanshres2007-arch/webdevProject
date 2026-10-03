# Birchline Studio
Multi-page website (HTML, CSS, JS only). Open `index.html` in a browser.
Add a video at `assets/video/studio.mp4` for the modal.

## Team workflow
1. Owner creates the repo and adds the others under Settings > Collaborators.
2. `git clone <repo-url>` then `git checkout -b feature/<name>`.
3. Commit small, then `git push -u origin feature/<name>` and open a pull request.
4. Before starting work: `git checkout main && git pull`.

## Suggested split
- Member 1: header, sidebar menu, footer (`css/styles.css`, `js/main.js` menu)
- Member 2: Home, About, video modal
- Member 3: Products filter, Contact form validation
