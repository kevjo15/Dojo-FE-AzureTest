import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import CSharpLogo from "../../../assets/CSharp.png";
import CssLogo from "../../../assets/Css.png";
import HtmlLogo from "../../../assets/Html.png";
import JsLogo from "../../../assets/Js.png";
import PythonLogo from "../../../assets/Python.png";
import ReactLogo from "../../../assets/React.png";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student", // Default role
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (name === "role") {
      setFormData({
        ...formData,
        role: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Här kan du skicka formData till backend
    console.log(formData);
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 rounded-lg">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48 mb-10"
                        src="https://www.infinetcode.se/_next/image?url=%2Flogo-dark-long.png&w=256&q=75"
                        alt="logo"
                      />
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4 text-lg font-semibold">Register</p>
                      {/* <!--First Name input--> */}
                      <TEInput
                        type="text"
                        name="firstName"
                        label="First Name"
                        className="mb-4"
                        value={formData.firstName}
                        onChange={handleChange}
                      />

                      {/* <!--Last Name input--> */}
                      <TEInput
                        type="text"
                        name="lastName"
                        label="Last Name"
                        className="mb-4"
                        value={formData.lastName}
                        onChange={handleChange}
                      />

                      {/* <!--Email input--> */}
                      <TEInput
                        type="email"
                        name="email"
                        label="Email"
                        className="mb-4"
                        value={formData.email}
                        onChange={handleChange}
                      />

                      {/* <!--Password input--> */}
                      <TEInput
                        type="password"
                        name="password"
                        label="Password"
                        className="mb-4"
                        value={formData.password}
                        onChange={handleChange}
                      />

                      {/* <!--Confirm Password input--> */}
                      <TEInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        className="mb-4"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />

                      {/* <!--Role input--> */}
                      <div className="flex items-center mb-4">
                        <label className="text-neutral-800 dark:text-neutral-200 mr-4">
                          Role:
                        </label>
                        <input
                          type="radio"
                          name="role"
                          value="Student"
                          id="roleStudent"
                          className="mr-2"
                          checked={formData.role === "Student"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="roleStudent"
                          className="text-neutral-800 dark:text-neutral-200 mr-4"
                        >
                          Student
                        </label>
                        <input
                          type="radio"
                          name="role"
                          value="Teacher"
                          id="roleTeacher"
                          className="mr-2"
                          checked={formData.role === "Teacher"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="roleTeacher"
                          className="text-neutral-800 dark:text-neutral-200"
                        >
                          Teacher
                        </label>
                      </div>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #6b21a8 , #581c87, #3b0764, #581c87, #6b21a8)",
                            }}
                          >
                            Register Account
                          </button>
                        </TERipple>
                      </div>

                      {/* <!--Login button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Already have an account?</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            style={{
                              background:
                                "linear-gradient(to right, #3b0764, #6b21a8)",
                            }}
                          >
                            Login
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with logos --> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #a855f7, #7e22ce,#581c87, #3b0764)",
                  }}
                >
                  <div className="px-4 py-6 md:mx-6 md:p-12 flex flex-wrap justify-center">
                    <h2 className="w-full text-center text-white mb-6 text-2xl font-extrabold">
                      Get Started With Your Courses Now
                    </h2>
                    <img
                      src={CSharpLogo}
                      alt="C# Logo"
                      className="w-20 h-20 m-2"
                    />
                    <img
                      src={CssLogo}
                      alt="CSS Logo"
                      className="w-20 h-20 m-2"
                    />
                    <img
                      src={HtmlLogo}
                      alt="HTML Logo"
                      className="w-20 h-20 m-2"
                    />
                    <img
                      src={JsLogo}
                      alt="JavaScript Logo"
                      className="w-20 h-20 m-2"
                    />
                    <img
                      src={PythonLogo}
                      alt="Python Logo"
                      className="w-20 h-20 m-2"
                    />
                    <img
                      src={ReactLogo}
                      alt="React Logo"
                      className="w-20 h-20 m-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
