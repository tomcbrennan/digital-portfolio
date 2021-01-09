import { App } from "./../components/App.js";



function projectsportalPageController() {

  let data = {};

  App.loadPage("Project Sportal | tbcreative.", "template-page-projectsportal", data, () => {
  
    //   tippy('.ps-color1', {
  //     content: '#E0534A'
  //   });
  
  // tippy('.ps-color2', {
  //     content: '#FFFFFF'
  //   });
  
  // tippy('.ps-color3', {
  // content: '#E1F4F3'
  // });
  
  // tippy('.ps-color4', {
  //     content: '#36373B'
  //   });
  
  //   tippy('.ps-color5', {
  //     content: '#DAA520'
  //   });
  
  // tippy('.ps-color6', {
  //     content: '#3FBA52'
  //   });

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

export { projectsportalPageController };
