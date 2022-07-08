import classes from "./Header.module.css"
import headerImage from "../../assets/header.webp"

function Header() {
  return ( 
    <div className={classes.Header}>
      <div className={classes.hero}>
      <h1>Ищи работу/заказывай услугу через</h1>
      <button>Найти работу</button>
      <button>Заказать</button>
      </div>
      <div>
        <img src={headerImage} alt="#" />
      </div>
    </div>
   );
}

export default Header;