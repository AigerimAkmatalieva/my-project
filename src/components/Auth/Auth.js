import classes from "./Auth.module.css"

function Auth() {


  return ( 
    <div className={classes.AuthItem}>
      <form className={classes.container}>
        <h1>Welcome</h1>
        <label>
          Электронная почта
          <input type="email" name="email"  placeholder="Enter Email" />
        </label>
        <label>
         Пароль
          <input type="password" name="password" placeholder="Enter Password" />
        </label>
        <button>Sign in</button>
        <button>Sign up</button>
      </form>
    </div>
   );
}

export default Auth;