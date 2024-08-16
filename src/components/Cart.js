import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Constant/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.card.info.price,
    0
  );

  return (
    <div className="text-center my-4 max-w-3xl mx-auto">
      <h1 className="font-extrabold text-2xl mb-4">Your Cart Items</h1>
      {cartItems.length !== 0 ? (
        <div className="mt-4">
          {/* <button className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600">
            Checkout
          </button> */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600">
            <Link to="/" className="text-white">
              Add Items to Cart
            </Link>
          </button>
        </div>
      )}
      {cartItems.length === 0 ? (
        <p className="text-red-600 text-xl my-4">Your cart is empty. Add Items to The Cart!!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center my-2 text-lg border-b pb-2"
            >
              <div>
                {item.card.info.name} - ₹{item.card.info.price / 100}
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold flex justify-between items-center my-2 text-xl">
            <div>Subtotal: </div>
            <div>₹{subtotal / 100}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
