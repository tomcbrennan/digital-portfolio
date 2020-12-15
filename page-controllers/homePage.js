import { App } from "./../components/App.js";


function homePageController() {
  document.querySelector(".menu-logo").style.transform = "translateY(-200px)";
  document.querySelector(".menu-logo").style.opacity = "0";

  document.querySelector(".social-links").style.transform =
    "translateX(-160px)";

  let data = {};
  App.loadPage("Tom Brennan | UI/UX Designer", "template-page-home", data, () => {
    new ClipboardJS(".social-link1");

    const homeAbout = document.querySelector(".home-about-container");
    const homePortfolio = document.querySelector(".home-portfolio-container");
    const homeDont = document.querySelector(".home-dont-container");
    const homeContact = document.querySelector(".home-contact-container");

    const homeLogo = document.querySelector("#logo");
    const homeGreetings = document.querySelector(".greetings");
    const aboutIcon = document.querySelector(".about-icon");
    const portfolioIcon = document.querySelector(".portfolio-icon");
    const dontIcon = document.querySelector(".dont-icon");
    const contactIcon = document.querySelector(".contact-icon");

    const homeDiv = document.querySelector(".home-content");

    // MOUSE ENTER ABOUT

    homeAbout.addEventListener("mouseenter", () => {
      homeLogo.style.display = "none";
      aboutIcon.style.display = "block";
      cursor.classList.add("expand");
      document.querySelector(".about-cursor").style.visibility = "visible";
    });

    homeAbout.addEventListener("mouseleave", () => {
      cursor.classList.remove("expand");
      document.querySelector(".about-cursor").style.visibility = "hidden";
      document.querySelector(".about-cursor").classList.add("hidden");
      cursor.classList.add("cursor-remove");
      homeLogo.style.display = "block";
      aboutIcon.style.display = "none";

      setTimeout(() => {
        cursor.classList.remove("cursor-remove");
        document.querySelector(".about-cursor").classList.remove("hidden");
      }, 300);
    });

    // MOUSE ENTER PORTFOLIO

    homePortfolio.addEventListener("mouseenter", () => {
      homeLogo.style.display = "none";
      portfolioIcon.style.display = "block";
      cursor.classList.add("expand");
      document.querySelector(".portfolio-cursor").style.visibility = "visible";
    });

    homePortfolio.addEventListener("mouseleave", () => {
      homeLogo.style.display = "block";
      portfolioIcon.style.display = "none";
      cursor.classList.remove("expand");
      document.querySelector(".portfolio-cursor").style.visibility = "hidden";
      document.querySelector(".portfolio-cursor").classList.add("hidden");
      cursor.classList.add("cursor-remove");

      setTimeout(() => {
        cursor.classList.remove("cursor-remove");
        document.querySelector(".portfolio-cursor").classList.remove("hidden");
      }, 300);
    });

    // MOUSE ENTER DONT

    // homeDont.addEventListener("mouseenter", () => {
    //   homeLogo.style.display = "none";
    //   dontIcon.style.display = "block";
    //   cursor.classList.add("expand");
    //   document.querySelector(".dont-cursor").style.visibility = "visible";
    // });

    // homeDont.addEventListener("mouseleave", () => {
    //   homeLogo.style.display = "block";
    //   dontIcon.style.display = "none";
    //  cursor.classList.remove("expand");
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
      homeLogo.style.display = "none";
      contactIcon.style.display = "block";
      cursor.classList.add("expand");
      document.querySelector(".contact-cursor").style.visibility = "visible";
    });

    homeContact.addEventListener("mouseleave", () => {
      homeLogo.style.display = "block";
      contactIcon.style.display = "none";
      cursor.classList.remove("expand");
      document.querySelector(".contact-cursor").style.visibility = "hidden";
      document.querySelector(".contact-cursor").classList.add("hidden");
      cursor.classList.add("cursor-remove");

      setTimeout(() => {
        cursor.classList.remove("cursor-remove");
        document.querySelector(".contact-cursor").classList.remove("hidden");
      }, 300);
    });

    if (document.querySelector(".home-section")) {
      document
        .querySelector(".social-links")
        .addEventListener("mouseover", () => {
          document.querySelector(".social-links").style.transform =
            "translateX(0)";
          // document.querySelector(".home-section").style.opacity = "0.5";
        });

      document
        .querySelector(".social-links")
        .addEventListener("mouseleave", () => {
          document.querySelector(".social-links").style.transform =
            "translateX(-160px)";
          // document.querySelector(".home-section").style.opacity = "1";
        });
    }

    // COPIED TO CLIPBOARD

    const copyEmail = document.querySelector("#copy-email");
    copyEmail.addEventListener("click", () => {
      document.querySelector(".copy-text").innerHTML = "copied!";
    });
  });


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
}
export { homePageController };
