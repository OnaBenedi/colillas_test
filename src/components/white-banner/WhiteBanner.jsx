import classes from "./WhiteBanner.module.css";
import settings from "../../assets/settings.svg";
import award from "../../assets/award.svg";
import rocket from "../../assets/rocket.svg";
import pen from "../../assets/pen-tool.svg";
import WhiteBannerSquares from "./white-banner-squares/WhiteBannerSquares";

function WhiteBanner() {
  const settingsText =
    "Lorem ipsum dolor sit amet consectetur. Eget enim quam quis commodo nisi. Blandit augue faucibus aliquam volutpat.";
  const awardText =
    "Lorem ipsum, dolor sit amet consectetur. Quis nulla rhoncus iaculis ac. Sed pretium sapien condimentum odio nunc lectus.";
  const rocketText =
    "Lorem ipsum dolor sit amet consectetur. Eu sed libero sed ultrices blandit enim at neque turpis. Turpis congue tempus at.";
  const penText =
    "Lorem ipsum dolor sit amet consectetur. Dignissim urna dui aliquam ut enim commodo nibh. Ornare amet semper sit.";

  return (
    <div className={classes.whiteBanner}>
      <WhiteBannerSquares logo={settings} name={"Pauline"} text={settingsText}/>
      <WhiteBannerSquares logo={award} name={"Bailee"} text={awardText} />
      <WhiteBannerSquares logo={rocket} name={"Henry"} text={rocketText} />
      <WhiteBannerSquares logo={pen} name={"Laurence"} text={penText} />
    </div>
  );
}

export default WhiteBanner;
