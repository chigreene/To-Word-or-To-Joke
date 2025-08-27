# To Word or To Joke — Heroku Deployment

## Local run

- Install deps: `npm install`
- Start: `npm start`
- Open: http://localhost:3000

## Deploy to Heroku

1. Create app: `heroku create <your-app-name>`
2. Push: `git push heroku main` (or `master` depending on your branch)
3. Open: `heroku open`

Notes:

- Procfile declares `web: node server.js`.
- Express serves static files from the project root.
- If using config vars (e.g., API keys), add in Heroku: `heroku config:set KEY=value`.
