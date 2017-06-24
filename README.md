# Minimal node/express server for Create-React-App

Minimal Expess API server for use with create-react-app.

Features:

- Express server running on Node.
- ESLint with eslint-config-airbnb, for the purpose of Visual 
Studio Code integration
- babel-register with ES2015 and stage-0 plugins, to allow for use of the latest ECMAScript features
- babel-cli to do a one-time transpile for production deployment

Not included: 

- Authentication (i.e. passport) not included.
- Database integration (i.e. mongoose) not included.

---

### Instructions for starting a new project: 

- `git clone https://github.com/plhosk/express-cra.git`
- Enter the folder
- `git remote remove origin`
- Create new repository on Github, copy the .git url
- `git remote add origin <url to new github repository>`
- `yarn` to download server packages (if you don't have yarn installed globally you can do it with `npm i -g yarn`)
- Edit package.json with the project name, repository and license
- Edit README.md for the project if desired
- `create-react-app <projectname>`
- Rename new CRA folder to "app"
- Edit app/package.json and add `"proxy": "http://localhost:5000"`. This will route requests from the internal create-react-app server to the external one.
- Git commands: `git status`, `git add .`, `git commit -m 'message'
- `git push origin master'

### Starting the server:

- Start API server with `yarn start`
- In separate terminal, start front-end by going into "app" folder and type `yarn start`
- During development you view the app on port 3000 (the create-react-app internal server). Any back-end requests will be routed to port 5000 because of the proxy config.
- When deploying to production, create-react-app will make a static index.html in the public folder, which can be seen by onnecting to the express server on port 5000.
- To delete the static production files, run the command `yarn remove-static`

### Heroku deploy:

1. make a Procfile
2. `heroku create`
3. `heroku apps:rename <new name>`
4. `heroku config:set KEY1=VALUE KEY2=VALUE`
5. `heroku config:set NPM_CONFIG_PRODUCTION=false` (necessary for heroku to install devDependencies)
5. `git push heroku master`

The `yarn heroku-start` in package.json is the same command as in `Procfile`, which is what Heroku uses to start the server.
