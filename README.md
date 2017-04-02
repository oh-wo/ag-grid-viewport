# ag-grid-viewport
Investigation to learn about how the Ag-Grid viewport model works.
[View it online here](https://table-improvements.herokuapp.com/)

# Requirements
_Only tested on MacOS._
* [Node](https://nodejs.org/en/)
* [Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-cli)

# Installation
* Install the server and ui by cd into `/server` and `/ui` respectively and then running `npm install`
* Setup Heroku so you can deploy:
** Get access to the heroku project from [owen](mailto:obodley@gmail.com?subject=Request for access to ag-grid-viewport&Body=Please give me access to the Ag-Grid-Viewport project hosted on Heroku.)
** Login: `heroku login`
** Add the git remote: `git remote add https://git.heroku.com/table-improvements.git`

# Local development
* Start the server and ui by running `npm start` in both `/server` and `/ui`
* Do your work in feature branches, create a PR and then merge to master after review.

# Production

## Deployment
* `git push heroku master`

## Logs
* Get heroku logs: `heroku logs --app table-improvements --tail`
