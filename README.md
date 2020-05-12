# Prince George's County Theft Map

This is a web app that visualizes and compares various types of theft and crime in Prince George's county.

Link to web app: https://inst377-theftproj-final.herokuapp.com/documentation.html

Target browers: Standard web browsers

User Manual: ./docs/user.md

Dev Manual:

You will need Homebrew(to help with installing packages), node.js, and npm
Required dependancies:
    babel
    express
    node-fetch
    nodemon
    node.js Heroku buildpack

To run this application on a server:

Go to a terminal, type in the command "npm start", open a browser window, navigate to "localhost:3000"

There are no tests but in the console log of this application there is an object called "Theft Array" from which all functions in this application depend on. If that is not showing up in the log, you have big problems.

API:

"server.js" fetches data from "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json" (GET command on line 18)

"main.js" fetches data from "server.js" (GET command on line 222)

As of right now, there are no known bugs. Future development will consist of adding more functions to do work on the data and adding in more information from the dataset. We will also be giving more functionality to the map.