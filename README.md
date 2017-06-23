# Minimal node/express server with Create-React-App

Node API server for create-react-app. with Express, ESLint with eslint-config-airbnb configuration, babel-register for ES6 code in the server.

Authentication (i.e. passport) not included.

Instructions for starting project: 

1. Copy this folder into a new one with the name of your project.
2. Enter the folder and type `yarn init` and `yarn` to download default server packages (express, etc)
3. Edit package.json with the project name and repository
4. Create README.md for the project
5. `create-react-app <projectname>`
6. Rename new CRA folder to "app"
7. Edit app/package.json and add `"proxy": "http://localhost:5000"`
8. Type `git init` to initialize Git repository
9. Git commands: `git status`, `git add .`, `git commit -m 'initial commit'
10. Create new repository on Github, copy the .git url
11. `git remote add origin <git-url>`
12. `git push origin master'

- Start API server with `yarn start`
- In separate terminal, start front-end by going into "app" folder and `yarn start`

Heroku deploy:
1. make a Procfile
2. `heroku create`
3. `heroku apps:rename <new name>`
4. `heroku config:set KEY1=VALUE KEY2=VALUE`
5. `git push heroku master`

The heroku-postbuild command in package.json should take care of building both server and app. (Otherwise Heroku will not install devDependencies unless you set `heroku config:set NPM_CONFIG_PRODUCTION=false`)
