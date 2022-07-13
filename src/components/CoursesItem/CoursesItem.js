import classes from "./CoursesItem.module.css"

function CoursesItem() {
  return ( 
    <div className={classes.wrapper}>
      <div className={classes.card}>
         <div className={classes.img}></div>
        <div className={classes.hero}>
        <h3>Название</h3>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorem expedita impedit nihil nostrum, odit pariatur libero dolores quis tempore provident? Odio suscipit dicta animi ex, aliquam quis repellat deleniti.</p>
        </div>
      </div>
      <div className={classes.card}>
         <div className={classes.img}></div>
        <div className={classes.hero}>
        <h3>Название</h3>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorem expedita impedit nihil nostrum, odit pariatur libero dolores quis tempore provident? Odio suscipit dicta animi ex, aliquam quis repellat deleniti.</p>
        </div>
      </div>
      <div className={classes.card}>
         <div className={classes.img}></div>
        <div className={classes.hero}>
        <h3>Название</h3>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorem expedita impedit nihil nostrum, odit pariatur libero dolores quis tempore provident? Odio suscipit dicta animi ex, aliquam quis repellat deleniti.</p>
        </div>
      </div>
    </div>
   );
}

export default CoursesItem;