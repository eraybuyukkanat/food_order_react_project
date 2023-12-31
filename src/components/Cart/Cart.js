import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.60</span>
      </div>
      <div className={styles.actions}>
            <button onClick={props.onClickHideHandler} className={styles['button--alt']}>Close</button>
            <button onClick={props.onClickHideHandler} className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
