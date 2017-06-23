# Minimal node/express server for Create-React-App

Minimal Expess API server for use with create-react-app.

Features:

- Express server running on Node.
- ESLint with eslint-config-airbnb, ready for VS Code integration
- babel-register for ES6 transpilation of server code
- babel-cli to pre-transpile on production deployment

Does not include: 

- Authentication (i.e. `passport`) not included.
- Database integration (i.e. `mongoose`) not included.

---

### Instructions for starting a new project: 

1. Copy or clone this folder into a new one with the name of your project.
2. Enter the folder and type and `yarn` to download server packages (if you don't have yarn installed globally you can do it with `npm i -g yarn`)
3. Edit package.json with the project name and repository
4. Edit README.md for the project if desired
5. `create-react-app <projectname>`
6. Rename new CRA folder to "app"
7. Edit app/package.json and add `"proxy": "http://localhost:5000"`. This will route requests from the internal create-react-app server to the external one.
8. Type `git init` to initialize Git repository
9. Git commands: `git status`, `git add .`, `git commit -m 'initial commit'
10. Create new repository on Github, copy the .git url
11. `git remote add origin <git-url>`
12. `git push origin master'

### Starting the server:

- Start API server with `yarn start`
- In separate terminal, start front-end by going into "app" folder and type `yarn start`

### Heroku deploy:

1. make a Procfile
2. `heroku create`
3. `heroku apps:rename <new name>`
4. `heroku config:set KEY1=VALUE KEY2=VALUE`
5. `git push heroku master`

The heroku-postbuild command in package.json should take care of building both server and app. (Otherwise Heroku will not install devDependencies unless you set `heroku config:set NPM_CONFIG_PRODUCTION=false`)

The `yarn heroku-start` in package.json is the same command as in `Procfile`, which is what Heroku uses to start the server.
