import { App } from "./../components/App.js";



function premierleaguePageController() {

  let data = {};

  App.loadPage("Premier League | tbcreative.", "template-page-premierleague", data, () => {
  //  tippy('.color1', {
  //     content: '#38003C'
  //   });
  //  tippy('.color2', {
  //     content: '#00FF85'
  //   });
  //   tippy('.color3', {
  //     content: '#E90052'
  //   });
  //  tippy('.color4', {
  //     content: '#FFFFFF'
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

export { premierleaguePageController };
