import {} from "./water.js";
import pcLogo from "../img/POST-CLUB-LOGO-WHITE.png";
import twitLogo from "../img/twitter_logo.png";
import instaLogo from "../img/instagram_logo.png";
import fceLogo from "../img/facebook_logo.png";
const footerLogo = document.getElementById("footer-logo-src");
const twitSrc = document.getElementsByClassName("twitter-logo-src")[0];
const instaSrc = document.getElementsByClassName("instagram-logo-src")[0];
const fceSrc = document.getElementsByClassName("facebook-logo-src")[0];

footerLogo.src = pcLogo;
twitSrc.src = twitLogo;
instaSrc.src = instaLogo;
fceSrc.src = fceLogo;
