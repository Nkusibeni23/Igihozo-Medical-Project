import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 lg:px-0 lg:py-5">
      <div className=" w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className=" text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello <span className=" text-primaryColor">Welcome Back</span>!🎉
        </h3>
        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-b shadow-sm focus:outline-none focus:ring-1 leading-7
              focus:border-b-irisBlueColor text-base rounded-md cursor-pointer placeholder:text-gray-400"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="********"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-b shadow-sm focus:outline-none focus:ring-1 leading-7
              focus:border-b-irisBlueColor text-base rounded-md cursor-pointer placeholder:text-gray-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-3 text-center text-white font-semibold bg-primaryColor rounded-xl cursor-pointer hover:opacity-90 uppercase transition-all duration-300"
            >
              Login
            </button>
            <div className="px-4 ml-4 text-nowrap text-sm sm:text-base">
              <p className="font-medium mt-5 text-gray-500">
                Don&apos;t have an account?{" "}
                <Link
                  to="/Signup"
                  className=" text-primaryColor font-semibold hover:underline transition-all duration-300"
                >
                  Register
                </Link>
              </p>
              <p className=" text-center font-[500] mt-4 text-gray-600 cursor-pointer hover:text-gray-800 transition-all duration-300">
                Forgot Password?{" "}
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
