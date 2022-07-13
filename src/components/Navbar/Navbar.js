import Logo from "../user-interface/Logo";
import classes from "./Navbar.module.css"
import NavItem from "./NavItem/NavItem";

function Navbar() {
  return (
    <div className={classes.background}>
      <div className={classes.Nav}>
        <div className={classes.container}>
          <ul>
            <Logo />
            <NavItem url="/main">Главная</NavItem>
            <NavItem url="/newsportal">Новости</NavItem>
            <NavItem url="/courses">Курсы и услуги</NavItem>
            <NavItem url="/freelans">Фриланс биржа</NavItem>

          </ul>
          <ul>
            <NavItem url="/">Регистрация</NavItem>
            <NavItem url="/">Войти</NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;