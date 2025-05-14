import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_medium.jpg"
          alt="background-image"
        />
      </div>
      <form className=" w-4/12 absolute p-12 bg-black opacity-80  text-white my-36 mx-auto right-0 left-0 rounded-md ">
        <h1 className="font-bold text-3xl  py-4">Sign In</h1>
        <input
          type="emai"
          placeholder="Email or mobile number"
          className="w-full p-4 my-2 border rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className=" w-full p-4 my-2 border   rounded-sm"
        />
        <button className="w-full p-4 my-2 bg-red-700 rounded-sm">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
