import classes from "./Footer.module.css";
import facebookLogo from "../../assets/facebook.svg";
import xLogo from "../../assets/x.svg";
import linkedinLogo from "../../assets/linkedin.svg"
import instagramLogo from "../../assets/instagram.svg"
import youtubeLogo from "../../assets/youtube.svg"

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerTop}>
        <p className={classes.footerTopTitle}>Fountainebleau</p>
        <p className={classes.footerTopText}>
          Cummerata Trail, 33
          <br /> 08012 Marianfort
          <br />(+34)123 456 789
        </p>
        <p className={classes.footerTopMail}>info@colillas.com</p>
      </div>
      <div className={classes.footerTop}>
        <p className={classes.footerTopTitle}>Daly City</p>
        <p className={classes.footerTopText}>
          N Front Street, 85
          <br /> 8895 Daly City
          <br /> (+34)123 456 789
        </p>
        <p className={classes.footerTopMail}>hello@colillas.com</p>
      </div>

      <div className={classes.mediaLinks}>
        <a href="#">
          <img src={facebookLogo} alt="facebook-logo" />
        </a>
        <a href="#">
          <img src={xLogo} alt="x-logo"  />
        </a>
        <a href="#"><img src={linkedinLogo} alt="linkedin-logo" /></a>
        <a href="#">
        <img src={instagramLogo} alt="instagram-logo" />
        </a>
        <a href="#">
        <img src={youtubeLogo} alt="youtube-logo" />
        </a>
      </div>
      <div className={classes.bottomLinks}>
        <p> © 2024 All rights reserved. </p>
        <a href="#"> Privacy Policy</a>
        <a href="#">Terms of service</a>
        <a href="#">Cookies Settings</a>
      </div>
    </div>
  );
}

export default Footer;
