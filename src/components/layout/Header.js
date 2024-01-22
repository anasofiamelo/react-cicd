import mealsImage from "./meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartButtonClick} />
      </header>
      <div className={classes["main-image"]}>
        <img alt="Meals" src={mealsImage} />
      </div>
    </>
  );
};
export default Header;
