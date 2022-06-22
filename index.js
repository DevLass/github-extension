/*
O que eu gostaria de ter nesse app

Mudar a cor dos quadradinhos verdes
Alterar a fonte 
Mudar o número de estrelas
Adicionar um botão para alternar entre pt,en

*/
"use strict";

const contributions_text = document.querySelector("#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.mt-4.position-relative > div.js-yearly-contributions > div > div > div > div:nth-child(2) > div.float-right.color-fg-muted");
const bio = document.querySelector(
  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-sidebar > div > div.js-profile-editable-replace > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.p-note.user-profile-bio.mb-3.js-user-profile-bio.f4 > div");

function start() {

  /*Change my name*/

  const name = document.querySelector(
    "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-sidebar > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.js-profile-editable-names.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-name.vcard-fullname.d-block.overflow-hidden"
  );
  name.innerHTML = `<i class="my_name">Hey there, I'm Nich!!</i>`;

  /*Change Star numbers*/

  const stars_text = document.querySelector(
    "#js-pjax-container > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-default.width-full.border-bottom.color-border-muted > div > div > div.Layout-main > div > nav > a:nth-child(5) > span"
  );
  stars_text.innerHTML = `<b class="stars">1000000000000!</b>`;

  /*Change Perfil pic 
  here you need a second account with the pic 
  *perfil_image.src = "https://avatars.githubusercontent.com/u/107775391?v=4";
  histgamer perfil
  senha comprida com N
  */

  const perfil_image = document.querySelector(
    "  #js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-sidebar > div > div.js-profile-editable-replace > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.position-relative.d-inline-block.col-2.col-md-12.mr-3.mr-md-0.flex-shrink-0 > a > img"
  );
  perfil_image.style.borderradius = "10%"

    /*Change the contributions text*/

    contributions_text.innerHTML = "Yeah, I work all year 😉";

    /*Add a button for switch languages*/

  const edit_button = document.querySelector(
    "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-sidebar > div > div.js-profile-editable-replace > div.d-flex.flex-column > div.flex-order-1.flex-md-order-none > div > div > span > span > a"
  );
  edit_button.insertAdjacentHTML(
    "afterend",
    `
        <button class="lang_button"> <b> English / Portuguese <b> </button>

    `
    /*        <button class="popup_button"> <b> Popup Test<b> </button>

        <div class="popup-wrapper">
          <div class="popup" >
              <div class="popup-close">x</div>
              <div class="popup-content">
              </div>
          </div>
        </div> */
  );

  /*Change Bio*/

    bio.innerHTML=`<p align="justify"> <i> <hr> So you downloaded my extension?? Congratulations, few have made it this far! <hr> I think you deserve to know a little more about me for that. Anyway, I'm a small town boy, who had his first contact with programming very early on. I'm passionate about coffee, animals, and a good trip.<hr> I was born on 10/28/2002 and my biggest dream is to provide good experiences for my family, and i will work hard for it. <hr> So, now you know a little more about me, how about telling me about yourself? Who knows, one day we can work together. <hr> </i> </p>`;

    bio.insertAdjacentHTML(
      "afterend",
      `
          <button class="linkedin_button"> <b> Contact me <b> </button>
  
      `
    );

}
start();

const lang = document.querySelector(".lang_button");
lang.addEventListener("click", translate);
var i = 0;

function translate() {
  const readme_title = document.querySelector(
    "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > h1 > i"
  );
  const readme_subtitle = document.querySelector(
    "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > h3:nth-child(3) > i"
  );
  const readme_text = document.querySelector(
    "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > h3:nth-child(5) > i"
  );
  const readme_main_project_title = document.querySelector(
    "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > h2 > i"
  );
  const readme_main_project_text_1 = document.querySelector(
    "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > i > i > h3:nth-child(2) > i"
  );
  const readme_main_project_text_2 = document.querySelector(
    "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > i > i > h3:nth-child(3) > i"
  );
  const readme_main_project_text_3 = document.querySelector(
    "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > i > i > h3:nth-child(4) > i"
  );
  const main_gif = document.querySelector("#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > p > animated-image > span > button > span > img");
  const first_img = document.querySelector("#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > a:nth-child(6) > img");
  const social_linkedin = document.querySelector("#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > i > i > a:nth-child(6) > img");
  const social_email = document.querySelector("#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > i > i > a:nth-child(8) > img");
  const social_tiktok = document.querySelector("#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.Box.mt-4 > div > article > div > i > i > a:nth-child(10) > img");

  i = i + 1;
  if (i % 2) {
    readme_title.innerHTML = `Eae, eu sou <a href="https://www.linkedin.com/in/nicollas-venancio/"> Nich</a>`;
    readme_subtitle.innerText =
      "E essa é uma pequena introdução ao meu universo";
    readme_text.innerText =
      "Eu sou um desenvolvedor Brasileiro que sempre está aprendendo algo e postando minha evolução por aqui";
    readme_main_project_title.innerText = '"Run Game" em plataforma';
    readme_main_project_text_1.innerText =
      "Este é um simples jogo com HTML, CSS e Javascript, com funções de pulo e colisões básicas, sendo também o meu primeiro contato com animações continuas com CSS";
    readme_main_project_text_2.innerHTML = `Eu pretendo trabalhar um pouco mais nesse projeto, adicionar um placar e um menu, você pode ver mais desse processo em meu <a href="https://github.com/italicnich/jump-game"> repositório </a>`;
    readme_main_project_text_3.innerHTML = `Créditos ao artista: <a href="https://opengameart.org/content/sunny-land-2d-pixel-art-pack">ansimuz</a>.`;

    main_gif.src = "https://github.com/italicnich/italicnich/raw/main/imnich-ptbr.png";
    first_img.src = "https://github.com/italicnich/italicnich/raw/main/4-ptbr.png";
    social_linkedin.src = "https://github.com/italicnich/italicnich/raw/main/2-ptbr.png";
    social_email.src = "https://github.com/italicnich/italicnich/raw/main/3-ptbr.png";
    social_tiktok.src = "https://github.com/italicnich/italicnich/raw/main/1-ptbr.png";

    contributions_text.innerHTML = "Sim, eu trabalho o ano todo 😉";
    bio.innerHTML = `<p align="justify"> <i> <hr> Então você baixou minha extensão?? Poucos chegaram até aqui Parabéns! <hr> Acho que você merece saber um pouco mais sobre mim por isso. Enfim, sou um garoto de cidade pequena, que teve seu primeiro contato com programação muito cedo. Sou apaixonada por café, animais e uma boa viagem.<hr> Nasci em 28/10/2002, meu maior sonho é proporcionar boas experiências para minha família, e vou trabalhar duro para isso. <hr> Então, agora você sabe um pouco mais sobre mim, que tal me contar sobre você? Quem sabe um dia possamos trabalhar juntos. <hr> </i> </p>`;

  } else {
    readme_title.innerHTML = `Hey There, Im <a href="https://www.linkedin.com/in/nicollas-venancio/"> Nich</a>`;
    readme_subtitle.innerText =
      "And this is a little introduction to my universe";
    readme_text.innerText =
      "I'm a Brazilian web developer with a thirst for knowledge, and I'm always posting my evolution here";
    readme_main_project_title.innerText = "Plataform Run Game";
    readme_main_project_text_1.innerText =
      "This is a simple game with html, css and javascript, it has simple jump and collision functions and it was the first time I dealt with continuous animations in css";
    readme_main_project_text_2.innerHTML = `I intend to work a little more on this project, add a scoreboard and a menu, but you can see more details of this process in my <a href="https://github.com/italicnich/jump-game"> repository </a>`;
    readme_main_project_text_3.innerHTML = `Artist credits: <a href="https://opengameart.org/content/sunny-land-2d-pixel-art-pack">ansimuz</a>.`;
    main_gif.src = "https://github.com/italicnich/italicnich/raw/main/imnich.gif";
    first_img.src = "https://github.com/italicnich/italicnich/raw/main/projects.png";
    social_linkedin.src = "https://github.com/italicnich/italicnich/raw/main/2.png";
    social_email.src = "https://github.com/italicnich/italicnich/raw/main/3.png";
    social_tiktok.src = "https://github.com/italicnich/italicnich/raw/main/1.png";

    contributions_text.innerHTML = "Yeah, I work all year 😉";

    bio.innerHTML=`<p align="justify"> <i> <hr> So you downloaded my extension?? Congratulations, few have made it this far! <hr> I think you deserve to know a little more about me for that. Anyway, I'm a small town boy, who had his first contact with programming very early on. I'm passionate about coffee, animals, and a good trip.<hr> I was born on 10/28/2002, my biggest dream is to provide good experiences for my family, and i will work hard for it. <hr> So, now you know a little more about me, how about telling me about yourself? Who knows, one day we can work together. <hr> </i> </p>`;
  }
}

/*
const open_popup = document.querySelector(".popup_button");
open_popup.addEventListener("click", active_popup);

const popup = document.querySelector('.popup-wrapper')
function active_popup(){
    popup.style.display = 'block'
}

const close_pp = document.querySelector(".popup-close");
close_pp.addEventListener("click",  close_popup);

function close_popup(){
    popup.style.display = 'none'
}

*/