A React app to track caloric intake and measure food portions.

# React and JSON notes:
Use rafce--> to quickly generate a skeleton for a function-based component.

# BUILD SERVER:
For this program we installed the NPM serve package globally with:
## `npm i -g serve`
This installed a standard HTTP server, from which I can serve the build folder with:
## `serve -s build -p 8000`
Where 8000 is the port, because we usually reserve the localhost:3000 for the dev server.
This is a basic HTTP server that can be used to serve the finished build of a project.

# JSON BACKEND SERVER:
We also instaled JSON server, a small mock REST API back-end with our own data.
In this case, we installed it locally.
Behaves similar to a real backend with Node.js Installed with:
## `npm i json-server`
And then added the following line of code to our package.json file under "scripts":
## ` "server": "json-server --watch db.json --port 5000" `
Then initialize it with:
## `npm run server`
Can then access given JSON objects:
## `localhost:5000/tasks`

# ROUTING:
Installed react router DOM with:
## `npm i react-router-dom`
Which appears in our package.json file.
From react-router-dom we also replace the <a> tag with the <Link> tag
This prevents the page from being reloaded when routing to different sections.

Uses the USDA FoodData Central API:
https://fdc.nal.usda.gov/api-guide.html

To run the json server use: npm run server
This will run the 'server' command in package.json

# TO DEPLOY

- npm run build
- ./deploy.sh
- Simply type calorie-build as a url

(
./deploy:
Empties calorie-build folder with rm www/calorie-build/*
Copies the contents of the build folder (build/.) to the www/calorie-build folder on the apache server
)

Must eventually replace the simple JSON server (with db.json) with a proper MySQL server, with a PHP backend that converts the database to a JSON file which can then be parsed by Javascript within React.