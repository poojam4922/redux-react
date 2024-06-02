import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/AuthSlice";
import { useNavigate, Navigate } from "react-router-dom";
import { eraseRemember, setRemember } from "../../redux/RememberSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "emilys",
    password: "emilyspass",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = useSelector((state) => state.auth);
  const remember = useSelector((state) => state.remember);
  console.log(remember,"pooja")
  const dispatch = useDispatch();


  useEffect(() =>{
if(error){
  setTimeout(() =>{
    setError(null)
  }, 3000)
}
  },[error])

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios({
        method: "POST",
        url: "https://dummyjson.com/auth/login",
        data: {
          username: remember.email,
          password: remember.password,
        },
      });
      setError(null)
      setLoading(false);
      dispatch(login(data));
      navigate("/profile");
    } catch (error) {
      setError(error.response.data.message)
      setLoading(false);
      dispatch(logout());
    }
  };

  const rememberMe =(e) =>{
   if(e.target.checked){
     dispatch(setRemember(user))
   } else {
     dispatch(eraseRemember(user))
   }
  }





  return auth.user ? (
    <Navigate to="/profile" />
  ) : (
    <div className="flex flex-col gap-y-4 justify-center items-center min-h-screen bg-red-50">
      {error && (
        <div className="rounded-lg bg-red-400 p-4 w-96 border border-white">
          <h1 className="font-semibold text-white">{error}</h1>
        </div>
      )}
      <div className="flex flex-col gap-y-3 bg-white rounded-lg px-8 py-6 w-96 shadow-lg">
        <h1 className="text-2xl font-semibold text-slate-800">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-600 font-semibold "> Username</label>
            <input
              value={user.email}
              onChange={handleInput}
              type="text"
              name="email"
              placeholder="username@gmail.com"
              required
              className="p-2 border border-slate-200 rounded"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-slate-600 font-semibold "> password</label>
            <input
              name="password"
              value={user.password}
              onChange={handleInput}
              type="password"
              placeholder="********"
              required
              className="p-2 border border-slate-200 rounded"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-x-3 items-center">
              <input
                type="checkbox"
                name="remember me"
                onChange={(e) => rememberMe(e)}
                disabled={user.email.length && user.password.length === 0}
              />
              <label className="text-slate-600 font-semibold">
                Remember Me!
              </label>
            </div>
            {loading ? (
              <button
                disabled
                className="bg-gray-400 px-6 py-2 text-white font-semibold"
              >
                Loading...
              </button>
            ) : (
              <button className="bg-indigo-500 px-6 py-2 text-white font-semibold">
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
