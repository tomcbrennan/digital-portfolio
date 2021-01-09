import { App } from "./../components/App.js";



function cloud9travelPageController() {

  let data = {};

  App.loadPage("Cloud 9 Travel | tbcreative.", "template-page-cloud9travel", data, () => {
    // tippy('.color1', {
    //   content: '#FFA608'
    // });
    // tippy('.color2', {
    //     content: '#7F7669'
    //   });
    // tippy('.color3', {
    //     content: '#FF0862'
    //   });
    // tippy('.color4', {
    //     content: '#FF0000'
    //   });
    // tippy('.color5', {
    //     content: '#EEE'
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

export { cloud9travelPageController };
