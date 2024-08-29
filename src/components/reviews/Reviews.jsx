import classes from "./Reviews.module.css"
import star from "../../assets/star.svg"
import layers from "../../assets/company-logo.svg"
import sisyphus from "../../assets/company-logo-1.svg"
import circooles from "../../assets/company-logo-2.svg"
import catalog from "../../assets/company-logo-3.svg"
import quotient from "../../assets/company-logo-4.svg"

function Reviews() {
  return (
    <div className={classes.reviews}>
      <div className={classes.reviewBox}>
        <p className={classes.reviewTitle}>Figma ipsum component variant main layer.</p>
        <div className={classes.rating}>
          <img src={star} alt="star-logo" />
          <img src={star} alt="star-logo" />
          <img src={star} alt="star-logo" />
          <img src={star} alt="star-logo" />
          <img src={star} alt="star-logo" />
        </div>
        <p className={classes.reviewBody}>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."</p>
        <div className={classes.ratingUserData}>
          <p className={classes.ratingUserName}>Name Surname</p>
          <p className={classes.ratingUserJob}>
            Position, Company name
          </p>
        </div>
      </div>
      <div className={classes.companyLogos}>
        <img src={layers} alt="layers-logo" className={classes.companySvg}/>
        <img src={sisyphus} alt="sisyphus-logo" className={classes.companySvg}/>
        <img src={circooles} alt="circooles-logo" className={classes.companySvg}/>
        <img src={catalog} alt="catalog-logo" className={classes.companySvg}/>
        <img src={quotient} alt="quotient-logo" className={classes.companySvg}/>
      </div>
    </div>
  )
}

export default Reviews