# Happy Hapi

This is a project designed to give a backend developer quick access to an easily scalable API in node.js using Hapi. It also provides the user with many tools that are great for development and keeping code streamlined.  Some of the features in this are personal preference, but all can be removed or re-imlemented with great ease.

## Usage:

*  `git clone https://github.com/samrocksc/happy-hapi`
*  `cd happy-hapi`
*  `npm i`
*  `npm run server`
*  Open browser to [localhost:3001/documentation](http://localhost:3001/documentation).

## What You Will Get:

* A Cors enabled Hapi Server
* A routes folder with example routes
* Hapi-swagger API Documentation
* An .eslintrc that is very friendly to es6 available in Node LTS.
* Simple database setup with [lowdb](https://github.com/typicode/lowdb).

## Workflow

The workflow for this project is very simple, and it can be added to any frontend quickly.
```
config.js -> index.js -> routes/index.js -> route/ -> handlers/
```

### Usage with Create-React-App
If you're going to be developing using [create-react-app](https://github.com/facebookincubator/create-react-app), just use a `proxy: "proxy": "http://localhost:3001/",` in your package.json.

### The workflow
*  `config.js` - contains general server information and swagger data.
*  `server.js` - Contains the basics of your Hapi rig, you can modify this to your own data.  It comes with [hapi-auth-cookie](https://github.com/hapijs/hapi-auth-cookie) ready to go, you don't have to enable it if you don't want.
*  `server/routes/index.js` - Basic route folder.  I like to use the array concatenation while developing so I can create my handlers and routes first and then include them in routes to plug them into the workflow.

*Folders*

*  `server/routes/` - The entire folder has routes in them that have examples of how [Joi](https://github.com/hapijs/joi) works.  All of these route files import their handlers.
*  `/server/handlers` - Handlers are what the routes deliver their input to. They will take the data and do whatever you need to do with it, three BREAD classes come configured with the default install.

## TODO

- [ ] More examples
- [ ] More Code
- [ ] Update .eslintrc with more Node friendly rules
- [ ] Possible setups for Database storage in branches(redis, postgres).
- [ ] Tests on routes using [code](https://github.com/hapijs/code) and [lab](https://github.com/hapijs/lab).
- [ ] Crete Seed Data
- [ ] Working example of bcrypt
