import {} from "./water.js";
import pcLogo from "../img/POST-CLUB-LOGO-WHITE.png";
import twitLogo from "../img/twitter_logo.png";
import instaLogo from "../img/instagram_logo.png";
import fceLogo from "../img/facebook_logo.png";
import favIcon from "../img/icon-32x32.png";

const footerLogo = document.getElementById("footer-logo-src");
const twitSrc = document.getElementsByClassName("twitter-logo-src")[0];
const instaSrc = document.getElementsByClassName("instagram-logo-src")[0];
const fceSrc = document.getElementsByClassName("facebook-logo-src")[0];

//webpack is beating my ass so im doing this here
function setFavicon(img) {
  let headTitle = document.querySelector("head");
  let setFavicon = document.createElement("link");
  setFavicon.setAttribute("rel", "shortcut icon");
  setFavicon.setAttribute("href", img);
  headTitle.appendChild(setFavicon);
}
setFavicon(favIcon);

footerLogo.src = pcLogo;
twitSrc.src = twitLogo;
instaSrc.src = instaLogo;
fceSrc.src = fceLogo;
