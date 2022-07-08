import classes from "./Footer.module.css"

function Footer() {
  return ( 
    <div className="background">
      <div className={classes.Footer}>
      <div>
        <h4>For Client</h4>
      </div>
      <div>
        <h4>For Talent</h4>
      </div>
      <div>
        <h4>Resources</h4>
      </div>
      <div>
        <h4>Company</h4>
      </div>
    </div>
    </div>
   );
}

export default Footer;