import classes from "./Footer.module.css"

function Footer() {
  return ( 
    <div className="background">
      <div className={classes.Footer}>
      <div>
        <h5>For Client</h5>
      </div>
      <div>
        <h5>For Talent</h5>
      </div>
      <div>
        <h5>Resources</h5>
      </div>
      <div>
        <h5>Company</h5>
      </div>
    </div>
    </div>
   );
}

export default Footer;