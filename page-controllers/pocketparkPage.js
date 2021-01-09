import { App } from "./../components/App.js";



function pocketparkPageController() {

  let data = {};

  App.loadPage("Pocketpark | tbcreative.", "template-page-pocketpark", data, () => {
    // tippy('.pp-color1', {
    //   content: '#225CFF'
    // });
    // tippy('.pp-color2', {
    //     content: '#E7E8E9'
    // });
    // tippy('.pp-color3', {
    //     content: '#BFC0C3'
    // });
    // tippy('.pp-color4', {
    //     content: '#112E80'
    // });

    document.querySelector(".menu-logo").style.transform = "translateY(-200px)";
    document.querySelector(".menu-logo").style.opacity = "0";
  
    document.querySelector(".social-links").style.transform =
      "translateX(-400px)";
    })

    document.querySelector('.home-about-container').style.display = 'none';
    document.querySelector('.home-portfolio-container').style.display = 'none';
    document.querySelector('.home-contact-container').style.display = 'none';
    document.querySelector('.hamburger-box').style.display = 'none';

}

export { pocketparkPageController };
