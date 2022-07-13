import classes from "./CheckoutItem.module.css"

function CheckoutItem() {
  return (
    <>
      <form>
        <div className={classes.Checkout}>
          <div className={classes.container}>
            <div className={classes.Checkout1}>
            <label>
                First name:
                <input type="text" name="firstName" required />
              </label>
              <br />
              <label>
                Last name:
                <input type="text" name="lastName" required />
              </label>
              <br />
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <br />
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <br/>
              <label>
                Phone:
                <input type="text" name="phone" required />
              </label>
              <br />
              <label>
                Country:
                <input type="text" name="country" required />
              </label>
            </div>
          </div>
        </div>
        <button className={classes.checkout} checkout>
        Checkout
        </button>
      </form></>
  );
}

export default CheckoutItem;