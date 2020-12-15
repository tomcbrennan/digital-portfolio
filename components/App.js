const App = {
  // properties
  name: "tbcreative.",
  version: "1.0.0",
  author: "Tom Brennan",
  rootEl: document.querySelector("#content"),
  routes: {},

  // methods

  init: () => {
    App.router();

    window.addEventListener("hashchange", App.router);

    console.log("Get groovy with us in 129 ~~~~~> https://poolside.fm/");
  },

  addRoute: (path, pageController) => {
    // adding an entry to App.routes
    App.routes[path] = {
      controller: pageController
    };
  },

  router: () => {
    // get the current hash location
    const path = window.location.hash || "#";
    // find route for this path in App.routes
    const route = App.routes[path];
    // if routes exists for this path
    if (route) {
      // run the route.contorller
      route.controller();
    } else {
      // load 404 page
      App.loadPage("404 page/file not found", "template-page-404", {});
    }
  },

  loadPage: (title, templateId, data, callback) => {
    // fade out app div
    App.rootEl.classList.add("hidden");
    // load in new HTML and fade in
    setTimeout(() => {
      App.rootEl.innerHTML = output;
      App.rootEl.classList.remove("hidden");
      // run callback
      if (typeof callback === "function") {
        callback();
      }
    }, 300);

    // set document title
    document.title = title;
    // grab the template and store in a variable
    let template = document.querySelector(`#${templateId}`).innerHTML;
    let output = Mustache.render(template, data);
    // insert the output HTML into the rootEl
  }
};


export { App };
