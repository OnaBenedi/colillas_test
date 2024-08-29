import classes from "./MainBanner.module.css";
import colillasLogo from "../../assets/logo-colillas.svg";
import arrow from "../../assets/arrow.svg"

function MainBanner() {
  return (
    <div className={classes.mainBanner}>
      <img src={colillasLogo} alt="colillas-logo" />
      <p className={classes.firstText}>
        Lorem, ipsum dolor sit amet consectetur. Elementum mauris tincidunt
        vitae ornare ultrices eget integer. Sagittis in ac fringilla sit.
      </p>
      <div className={classes.mainBannerText}>
        <p className={classes.mainBannerTitle}>Lorem ipsum dolor sit amet</p>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nibh vestibulum elefeind a
            et.
          </p>
          <img src={arrow} alt="arrow-right" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet sed vitae urna egestas
            amet.
          </p>
          <img src={arrow} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
