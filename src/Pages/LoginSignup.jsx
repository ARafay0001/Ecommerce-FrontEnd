import React, { useState } from "react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="px-[10%] h-[60vh] flex items-center justify-center bg-linear-to-b from-pink-200 to-white ">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        

        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>


        <form className="flex flex-col gap-4">
          
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Switch Mode */}
        <p className="text-center text-gray-600 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-semibold text-black cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginSignup;