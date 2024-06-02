import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/ProductSlice";
import { addToCart } from "../../redux/CartSlice";

const Product = () => {
  const product = useSelector((state) => state.ProductSlice);
  console.log(product);
  const dispatch = useDispatch();
  console.log(product);
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <>
      {product.loading && (
        <div className="flex items-center gap-y-4 py-16 bg-red-100 min-h-screen">
          <h1 className="text-2xl bg-white p-3 px-5 rounded-lg">Loading...</h1>
        </div>
      )}
      {product.loading == false && product.data && (
        <div className="flex items-center gap-y-4 py-16 bg-red-100 min-h-screen">
          <div className="p-16 bg-red-50 grid md:grid-cols-4 gap-4">
            {product.data.map((item, index) => (
              <div key={index} className="shadow-lg bg-white p-8 border rounded-lg">
               <div className="flex items-center justify-center">
               <img 
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "10px"
                }}
                src={item.image} alt={item.name} />
               </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold text-lg">{item.title}</h1>
                  <p className="text-gray-600">{item.description.slice(0,40)}</p>
                  <p className="font-semibold text-lg">$ {item.price}</p>
                </div>
                <div className="flex gap-4 mt-5">
                  <button  onClick={() => dispatch(addToCart(item))} className="px-4 py-2 bg-orange-500 text-whiyte font-semibold rounded">Add To Cart</button>
                  <button className="px-4 py-2 bg-green-500 text-whiyte font-semibold rounded"> Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {product.loading == false && product.error && (
        <div className="flex items-center gap-y-4 py-16 bg-red-100 min-h-screen">
          <h1 className="text-2xl bg-white p-3 px-5 rounded-lg">
            Something Went Wrong...
          </h1>
        </div>
      )}
    </>
  );
};

export default Product;
