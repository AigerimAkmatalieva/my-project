import classes from "./Checkout.module.css";



function Checkout() {
  return (
    <div className={classes.wrapper}>
      <h1>Присоединяйтесь как клиент или фрилансер</h1>
      <div className={classes.wrapper1}>
      <div className={classes.card_1}>
        <h5>Я клиент, нанимаю для проекта</h5>
      </div>
      <div className={classes.card_2}>
        <h5>Я фрилансер, ищу работу</h5>
      </div>
    </div>
    </div>
  );
}

export default Checkout;
