import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/AuthSlice";
import { useNavigate } from "react-router-dom";
const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Images",
    to: "/images",
  },
  {
    label: "Login",
    to: "/login",
  },
  {
    label: "Post",
    to: "/post",
  },
  {
    label: "Product",
    to: "/product",
  },
  {
    label: "Cart",
    to: "/cart",
    badge:true,
  },
];

const Layout = ({ children }) => {
  const[animate, setAnimate] = useState(null)  
  const[popup, setPopup] = useState(false)
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cart = useSelector((state) => state.CartSlice)


  const logoutHandler =()=>{
    dispatch(logout())
    navigate('/')
  }

  const handlePopup =() =>{
    if(popup){
        setAnimate('animate__animated animate__flipOutX');
        setTimeout(()=>{
            setPopup(false)
        },500)
        
    } else {
        setPopup(true)
        setAnimate('animate__animated animate__flipInY')
    }
  }

  return (
    <>
      <div>
        <div className="flex fixed top-0 left-0 z-10 w-full justify-around items-center bg-slate-900">
          <h1 className="text-white text-2xl font-bold">Redux</h1>
          <ul className="flex justify-between gap-x-4 text-white text-xl font-bold">
            {menus.map((menu, index) => (
              <div key={index}>
                {
                (auth.user && menu.to) !== "/login" && (
                  <li key={index} className="p-6 hover:bg-indigo-600">
                    {
                      menu.badge && cart.length > 0 && (
                        <div className="absolute top-2  bg-red-500
                        w-8h-8 rounded-full flex items-center justify-center text-semibold text-white">
                          {cart.length}
                        </div>
                      )
                    }
                    <Link to={menu.to}>{menu.label}</Link>
                  </li>
                )
                }
              </div>
            ))}
          </ul>

          {
            auth.user && (
                <div className="relative flex items-center">
                    <button onClick={handlePopup} className="w-8 h-8 bg-orange-600 rounded-full">
                        <img  
                        src={auth.user.image}
                        alt={auth.user.firstName}
                        />
                    </button>
                    {
                        popup && 
                        <div className={`absolute top-20 border rounded flex flex-col bg-white shadow-lg ${animate}`}>
                        <Link to='/profile' className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left">My Profile</Link>
                        <button className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left">{auth.user.email}</button>
                        <button 
                        onClick={logoutHandler}
                        className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left">Logout</button>
                    </div>
                    }
                </div>
            )
          }


        </div>
        <div>{children}</div>
        <div className="bg-slate-900 p-32">
          <h1 className=" text-white text-6xl font-bold">Footer</h1>
        </div>
      </div>
    </>
  );
};

export default Layout;
