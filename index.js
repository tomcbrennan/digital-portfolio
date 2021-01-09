// Imports -- components ---------------------------------------------
import { App } from "/components/App.js";

// Imports -- pageControllers ----------------------------------------

import { homePageController } from "/page-controllers/homePage.js";

import { aboutPageController } from "/page-controllers/aboutPage.js";

import { portfolioPageController } from "/page-controllers/portfolioPage.js";

import { contactPageController } from "/page-controllers/contactPage.js";

import { pocketparkPageController } from "/page-controllers/pocketparkPage.js";

import { premierleaguePageController } from "/page-controllers/premierleaguePage.js";

import { projectsportalPageController } from "/page-controllers/projectsportalPage.js";

import { cloud9travelPageController } from "/page-controllers/cloud9travelPage.js";

// Routes ---------------------------------------------
// # (home)
App.addRoute("#", homePageController);

// #about
App.addRoute("#about", aboutPageController);

// #portfolio
App.addRoute("#portfolio", portfolioPageController);

// #contact
App.addRoute("#contact", contactPageController);

// #pocketpark
App.addRoute("#pocketpark", pocketparkPageController);

// #premierleague
App.addRoute("#premierleague", premierleaguePageController);

// #projectsportal
App.addRoute("#projectsportal", projectsportalPageController);

// #cloud9travel
App.addRoute("#cloud9travel", cloud9travelPageController);


// Run APP INIT on DOMContentLoaded
document.addEventListener("DOMContentLoaded", App.init);
