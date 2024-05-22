import React, { useState } from "react";
import Logo from "../InfinetLogo/InfinetLogo";
import LoginTextBoxes from "../LoginForm/Components/LoginTextBoxes"; // Importera LoginTextBoxes
import WideButton from "../Button/WideButton";
import Button from "../Button/Button";
import ProgrammingLogos from "../ProgrammingLogos/ProgammingLogos";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700 rounded-lg">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="flex justify-center sm:pt-2 mb-6">
                      <Logo />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      <LoginTextBoxes
                        formData={formData}
                        handleChange={handleChange}
                      />
                      {/* <!-- Register Account button --> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <WideButton type="submit" text="LOG IN" />
                        <a href="#!">Forgot password?</a>
                      </div>
                      {/* <!-- Login button --> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <Button type="button">Register</Button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- Right column container with logos --> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #a855f7, #7e22ce, #581c87, #3b0764)",
                  }}
                >
                  <div className="px-4 py-6 md:mx-6 md:p-12 flex flex-wrap justify-center">
                    <h2 className="w-full text-center text-white mb-6 text-2xl font-extrabold">
                      Get Started With Your Courses Now
                    </h2>
                    <ProgrammingLogos />
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

export default LoginForm;
