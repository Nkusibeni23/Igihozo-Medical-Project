/* eslint-disable no-unused-vars */
import SignUpImage from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (event) => {
    // Make sure the file is an image.
    const file = event.target.files[0];

    console.log(file);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <section className="px-4 lg:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-6 gap-4">
          {/* img box */}
          <div className="bg-primaryColor rounded-l-lg">
            <figure className="hidden lg:block rounded-l-lg">
              <img
                src={SignUpImage}
                alt="sign up image gif"
                className=" w-full rounded-l-2xl"
              />
            </figure>
          </div>
          {/* sign up form */}
          <div className="lg:pl-4 py-10">
            <h3 className=" text-headingColor text-[20px] leading-9 font-bold mb-10">
              Create an <span className=" text-primaryColor">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pr-4 px-4 py-3 border-b shadow-sm focus:outline-none focus:ring-1 leading-7
              focus:border-b-irisBlueColor text-base rounded-md cursor-pointer placeholder:text-gray-400"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pr-4 px-4 py-3 border-b shadow-sm focus:outline-none focus:ring-1 leading-7
              focus:border-b-irisBlueColor text-base rounded-md cursor-pointer placeholder:text-gray-400"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pr-4 px-4 py-3 border-b shadow-sm focus:outline-none focus:ring-1 leading-7
              focus:border-b-irisBlueColor text-base rounded-md cursor-pointer placeholder:text-gray-400"
                />
              </div>
              <div className=" mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className=" text-headingColor font-bold text-[16px] leading-7 px-4 py-3 focus:outline-none"
                >
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className=" text-gray-400  font-semibold text-[15px] leading-7"
                    required
                  >
                    <option>Select</option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor/Healthcare Provider</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className=" text-headingColor font-bold text-[16px] leading-7 px-4 py-3 focus:outline-none"
                >
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className=" text-gray-400  font-semibold text-[15px] leading-7"
                    required
                  >
                    <option value="">Choose</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other...</option>
                  </select>
                </label>
              </div>
              <div className=" mb-5 flex items-center gap-3">
                <figure className=" w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img
                    src={avatar}
                    alt="Doctor Image"
                    className=" rounded-full w-full"
                  />
                </figure>
                <div className=" relative w-[140px] h-[45px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className=" absolute top-0 left-0 h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className=" absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-3 text-center text-white font-semibold bg-primaryColor rounded-xl cursor-pointer hover:opacity-90 uppercase transition-all duration-300"
                >
                  Sign Up
                </button>
                <div className="px-4 ml-4 text-nowrap text-sm sm:text-base">
                  <p className="font-medium mt-5 text-gray-500">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className=" text-primaryColor font-semibold hover:underline transition-all duration-300"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
