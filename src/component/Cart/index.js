import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllCart, removeCart } from "../../redux/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.CartSlice);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="flex flex-col p-16 w-3/4 bg-red-50 gap-4">
         <div>
         {
          cart.length > 0 ?
          <button
            onClick={() => dispatch(removeAllCart())}
            className="px-4 py-2 bg-red-500 text-whiyte font-semibold rounded"
          >
            {" "}
            Remove-All
          </button>
          :
          <h1 className="font-semibold text-lg">Cart is Empty</h1>
         }
         </div>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex gap-x-8 animate__animated animate__zoomIn shadow-lg bg-white p-8 border rounded-lg"
            >
              <div className="flex items-center justify-center">
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "10px",
                  }}
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold text-lg">{item.title}</h1>
                  <p className="text-gray-600">
                    {item.description.slice(0, 40)}
                  </p>
                  <p className="font-semibold text-lg">$ {item.price}</p>
                </div>
                <div className="flex items-start  gap-4 mt-5">
                  <button className="px-4 py-2 bg-green-500 text-whiyte font-semibold rounded">
                    {" "}
                    Buy Now
                  </button>
                  <button
                    onClick={() => dispatch(removeCart(index))}
                    className="px-4 py-2 bg-red-500 text-whiyte font-semibold rounded"
                  >
                    {" "}
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
