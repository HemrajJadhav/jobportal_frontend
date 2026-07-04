import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //email check
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully", { email, password });
    }
  };
  return (
    <div className="Page w-full h-screen bg-mback flex justify-center items-center">
      <div className="MainContainer min-w-150 max-w-200 bg-white rounded-4xl shadow-lg shadow-mplaceholder/10 h-fit flex overflow-hidden ">
        <div className="Right bg-blue-500 p-10 w-full "></div>
        <div className="UselessDiv p-10">
          <form
            onSubmit={handleSubmit}
            className="Left flex flex-col gap-6  text-sm w-90 shrink-0"
            action=""
          >
            {/* c1 top text  */}
            <div className="Heading  flex flex-col mb-5">
              <span className="font-bold text-xl">
                Login your applicant profile.
              </span>
              <span className="text-mgray text-sm text-mplaceholder">
                Search & apply to jobs
              </span>
            </div>

            {/* c3 email id  */}
            <div className="EmailId flex flex-col">
              <label htmlFor="email" className="font-bold">
                Email ID
              </label>
              <input
                className={`p-3 border border-mgray-100 rounded-xl placeholder-mplaceholder focus:outline-none 
                      ${errors.email ? "focus:border-red-400 border-red-500" : "focus:border-blue-500"}  `}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your Email ID"
                name="email"
                id="email"
              />
              {errors.email && (
                <span className="text-red-400 px-2 pt-1">{errors.email}</span>
              )}
            </div>
            {/* c4 password */}
            <div className="Password flex flex-col">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                className={`p-3 border border-mgray-100 rounded-xl placeholder-mplaceholder focus:outline-none 
                      ${errors.password ? "focus:border-red-400 border-red-500" : "focus:border-blue-500"}  `}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Create password"
                name="password"
                id="password"
              />
              {errors.password && (
                <span className="text-red-400 px-2 pt-1">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="Button">
              <button
                type="submit"
                className="bg-blue-500 py-3 rounded-full text-white text-[16px] flex justify-start px-5 font-bold cursor-pointer hover:shadow-lg hover: shadow-mgray-200/20 transition-all duration-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
