# polymer-3-example-app

Polymer 3 example application using the Stack Exchange API to search for questions and display answers.

Polymer 3 Best Practices. Polymer 3 Architecture for large scale applications.

Created by **PolymerExample** [https://github.com/polymerexample](https://github.com/polymerexample)

The full source code is available at [https://github.com/polymerexample/polymer-3-example-app](https://github.com/polymerexample/polymer-3-example-app).

### Screen Shot
![polymer-3-example-app](https://github.com/polymerexample/polymer-3-example-app/blob/master/images/polymer-3-example-app.png)

## Same App In Angular and React

Here is the same app written in Angular and React:

* [angular-9-example-app](https://github.com/angularexample/angular-9-example-app)
* [react-example-app](https://github.com/reactjsexample/react-example-app)

## Table of Contents
- [About The Author](#about-the-author)
- [Project Setup](#project-setup)
  * [Prerequisites](#prerequisites)
  * [How To Install](#how-to-install)
  * [How To Run](#how-to-run)
  * [How To Run Unit Tests](#how-to-run-unit-tests)
- [Software Libraries Used](#software-libraries-used)
- [Learn More About React](#learn-more-about-react)

## About The Author
**JC Lango** is a UI Architect and UI Developer for large scale web applications at several Fortune 500 companies.

He is an expert in **Angular**, **Polymer**, and **React** and maintains these sites at Github:

* **AngularExample** [https://github.com/angularexample](https://github.com/angularexample)
* **PolymerExample** [https://github.com/polymerexample](https://github.com/polymerexample)
* **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

JC may be available to work remote, and can be contacted at these links:
 
* LinkedIn: [https://www.linkedin.com/in/jclango](https://www.linkedin.com/in/jclango)
* Email: [jobs@jclango.com](mailto:jobs@jclango.com)

## Project Setup
### Prerequisites
#### Install NodeJS
You need to have Node and NPM installed on your PC.

[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Install Polymer CLI
Next, you should have the Polymer Client installed globally.

[Install Polymer CLI](https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli)

#### `npm install -g polymer-cli`

### How To Install
Download the source code using git or else download and unzip the zip file.

Open a terminal window and go to the project root folder.

You need to have npm installed globally.

Run the following command to install the required libraries.

#### `npm i`

### How To Run
Open a terminal window and make sure you are in the project root folder.

Run the following command for a dev server.

#### `polymer serve`

Open your browser and go to [http://127.0.0.1:8081/](http://127.0.0.1:8081/)

The browser will not automatically reload if you change any of the source files,
so you need to refresh the browser to see your changes.

Open the browser's Developer Tools window to see any errors in the Console.

### How To Run Unit Tests
To run the unit tests, you need to stop the server.
 
If the server is running, stop the server from the terminal window by pressing *Control-C*.

The following command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

#### `polymer test`

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

Read More here [daffl/launchpad](https://github.com/daffl/launchpad#environment-variables-impacting-local-browsers-detection)

## Software Libraries Used
The following software libraries are used:
* Polymer 3

See the package.json file for details.

---
