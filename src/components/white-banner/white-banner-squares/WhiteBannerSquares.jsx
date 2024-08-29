import classes from "./WhiteBannerSquares.module.css";

function WhiteBannerSquares({ logo, name, text }) {
  return (
    <div className={classes.whiteBannerSquare}>
      <img src={logo} alt="square-logo" />
      <p className={classes.whiteBannerTitle}>{name}</p>
      <p className={classes.whiteBannerText}>
        {text}
      </p>
    </div>
  );
}

export default WhiteBannerSquares;
