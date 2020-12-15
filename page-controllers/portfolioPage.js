import { App } from "./../components/App.js";

function portfolioPageController() {
  document.querySelector(".menu-logo").style.transform = "translateY(0)";
  document.querySelector(".menu-logo").style.opacity = "1";

  document.querySelector(".social-links").style.transform =
    "translateX(-160px)";

  let data = {};
  App.loadPage(
    "Tom Brennan | UI/UX Designer",
    "template-page-portfolio",
    data,
    () => {
      new ClipboardJS(".social-link1");

      const cursor = document.querySelector(".cursor");
      document.addEventListener("mousemove", e => {
        cursor.setAttribute(
          "style",
          "top:" + (e.clientY - 10) + "px; left:" + (e.clientX - 10) + "px;"
        );
      });

      document.addEventListener("click", () => {
        cursor.classList.add("click");
        setTimeout(() => {
          cursor.classList.remove("click");
        }, 500);
      });

      const homeAbout = document.querySelector(".home-about-container");
      const homePortfolio = document.querySelector(".home-portfolio-container");
      const homeDont = document.querySelector(".home-dont-container");
      const homeContact = document.querySelector(".home-contact-container");

      const homeDiv = document.querySelector(".home-content");

      // MOUSE ENTER ABOUT

      homeAbout.addEventListener("mouseenter", () => {
        cursor.classList.add("expand");
        document.querySelector(".about-cursor").style.visibility = "visible";
      });

      homeAbout.addEventListener("mouseleave", () => {
        cursor.classList.remove("expand");
        document.querySelector(".about-cursor").style.visibility = "hidden";
        document.querySelector(".about-cursor").classList.add("hidden");
        cursor.classList.add("cursor-remove");

        setTimeout(() => {
          cursor.classList.remove("cursor-remove");
          document.querySelector(".about-cursor").classList.remove("hidden");
        }, 300);
      });

      // MOUSE ENTER PORTFOLIO

      homePortfolio.addEventListener("mouseenter", () => {
        cursor.classList.add("expand");
        document.querySelector(".portfolio-cursor").style.visibility =
          "visible";
      });

      homePortfolio.addEventListener("mouseleave", () => {
        cursor.classList.remove("expand");
        document.querySelector(".portfolio-cursor").style.visibility = "hidden";
        document.querySelector(".portfolio-cursor").classList.add("hidden");
        cursor.classList.add("cursor-remove");

        setTimeout(() => {
          cursor.classList.remove("cursor-remove");
          document
            .querySelector(".portfolio-cursor")
            .classList.remove("hidden");
        }, 300);
      });

      // MOUSE ENTER DONT

      // homeDont.addEventListener("mouseenter", () => {
      //   cursor.classList.add("expand");
      //   document.querySelector(".dont-cursor").style.visibility = "visible";
      // });

      // homeDont.addEventListener("mouseleave", () => {
      //   cursor.classList.remove("expand");
      //   document.querySelector(".dont-cursor").style.visibility = "hidden";
      //   document.querySelector(".dont-cursor").classList.add("hidden");
      //   cursor.classList.add("cursor-remove");

      //   setTimeout(() => {
      //     cursor.classList.remove("cursor-remove");
      //     document.querySelector(".dont-cursor").classList.remove("hidden");
      //   }, 300);
      // });

      // MOUSE ENTER CONTACT

      homeContact.addEventListener("mouseenter", () => {
        cursor.classList.add("expand");
        document.querySelector(".contact-cursor").style.visibility = "visible";
      });

      homeContact.addEventListener("mouseleave", () => {
        cursor.classList.remove("expand");
        document.querySelector(".contact-cursor").style.visibility = "hidden";
        document.querySelector(".contact-cursor").classList.add("hidden");
        cursor.classList.add("cursor-remove");

        setTimeout(() => {
          cursor.classList.remove("cursor-remove");
          document.querySelector(".contact-cursor").classList.remove("hidden");
        }, 300);
      });

      document
        .querySelector(".social-links")
        .addEventListener("mouseover", () => {
          document.querySelector(".social-links").style.transform =
            "translateX(0)";
        });

      document
        .querySelector(".social-links")
        .addEventListener("mouseleave", () => {
          document.querySelector(".social-links").style.transform =
            "translateX(-160px)";
        });

      // COPIED TO CLIPBOARD

      const copyEmail = document.querySelector("#copy-email");
      copyEmail.addEventListener("click", () => {
        document.querySelector(".copy-text").innerHTML = "copied!";
      });
    }
  );
}

export { portfolioPageController };
