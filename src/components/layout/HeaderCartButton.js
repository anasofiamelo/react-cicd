import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useCart } from "../../contexts/cart-context";

const HeaderCartButton = (props) => {
  const { items } = useCart();
  const cartItemsLength = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your cart</span>
      <span className={classes.badge}>{cartItemsLength}</span>
    </button>
  );
};

export default HeaderCartButton;
