import React, { useState } from "react";
import il1 from "../../assets/whiteBody.png";
import axios from "axios";
import { toast } from "react-hot-toast";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", phone: "", name: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //email check
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    //password check

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }
    // else if (!passwordRegex.test(password)) {
    //       newErrors.password =
    //         "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
    //       isValid = false;
    //     }
    //phone check
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (!phone) {
      newErrors.phone = "Mobile number is required.";
      isValid = false;
    } else if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
      // strip spaces before testing
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    //name check
    if (!name) {
      newErrors.name = "Full name is required.";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = async () => {
    // e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8088/api/auth/register",
        {
          username: name,
          email: email,
          mobileNumber: phone,
          password: password,
        },
      );
      console.log(response.data);
      toast.success("Registration successful");
    } catch (e) {
      console.log("MyError:" + e);
      if (e.response && e.response.data) {
        console.log("Backend error payload: ", e.response.data);

        const errorMessage = e.response.data.message || "Registration failed";

        toast.error(errorMessage);
      } else if (e.request) {
        toast.error("No response from server. Please try again.");
      } else {
        toast.error("An unexpected error occured: " + e.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully!", { email, password });
      // Proceed with your API call here
    }

    handleRegister();
  };

  return (
    <div className="Page w-full h-screen bg-mback flex justify-center items-center">
      <div className="MainContainer min-w-200 max-w-200 bg-white rounded-4xl shadow-lg shadow-mplaceholder/10 h-fit flex overflow-hidden ">
        <div className="UselessDiv p-10">
          <form
            onSubmit={handleSubmit}
            className="Left flex flex-col gap-6  text-sm w-90 shrink-0"
            action=""
          >
            {/* c1 top text  */}
            <div className="Heading  flex flex-col mb-10">
              <span className="font-bold text-xl">
                Create your applicant profile.
              </span>
              <span className="text-mgray text-sm text-mplaceholder">
                Search & apply to jobs
              </span>
            </div>
            {/* c2 full name */}
            <div className="FullName flex flex-col">
              <label htmlFor="name" className="font-bold mb-1">
                Full Name
              </label>
              <input
                className={`p-3 border border-mgray-100 rounded-xl placeholder-mplaceholder focus:outline-none 
                    ${errors.name ? "focus:border-red-400 border-red-500" : "focus:border-blue-500"}  `}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="What is your Name?"
                name="name"
                id="name"
              />
              {errors.name && (
                <span className="text-red-400 px-2 pt-1">{errors.name}</span>
              )}
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
                placeholder="Tell us your Email ID"
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
            {/* c5 mob number  */}
            <div className="MobileNumber flex flex-col">
              <label htmlFor="mobile" className="font-bold">
                Mobile Number
              </label>
              <input
                className={`p-3 border border-mgray-100 rounded-xl placeholder-mplaceholder focus:outline-none 
                    ${errors.phone ? "focus:border-red-400 border-red-500" : "focus:border-blue-500"}  `}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Enter your mobile number"
                name="mobile"
                id="mobile"
              />
              {errors.phone && (
                <span className="text-red-400 px-2 pt-1">{errors.phone}</span>
              )}
            </div>
            <div className="Button">
              <button
                type="submit"
                className="bg-blue-500 py-3 rounded-full text-white text-[16px] flex justify-start px-5 font-bold cursor-pointer hover:shadow-lg hover: shadow-mgray-200/20 transition-all duration-200"
              >
                Register now
              </button>
            </div>
          </form>
        </div>

        <div className="Right bg-blue-500 p-10 ">
          <img className="object-contain w-full " src={il1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
