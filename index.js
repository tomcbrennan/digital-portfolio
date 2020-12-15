// Imports -- components ---------------------------------------------
import { App } from "/components/App.js";

// Imports -- pageControllers ----------------------------------------

import { homePageController } from "/page-controllers/homePage.js";

import { aboutPageController } from "/page-controllers/aboutPage.js";

import { portfolioPageController } from "/page-controllers/portfolioPage.js";

import { otherProjectsPageController } from "/page-controllers/otherProjectsPage.js";

import { contactPageController } from "/page-controllers/contactPage.js";

// Routes ---------------------------------------------
// # (home)
App.addRoute("#", homePageController);

// #about
App.addRoute("#about", aboutPageController);

// #portfolio
App.addRoute("#portfolio", portfolioPageController);

// #otherProjects
App.addRoute("#otherProjects", otherProjectsPageController);

// #contact
App.addRoute("#contact", contactPageController);

document.addEventListener("DOMContentLoaded", App.init);
