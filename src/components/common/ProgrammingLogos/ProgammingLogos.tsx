import React from "react";
import CSharpLogo from "../../../assets/CSharp.png";
import CssLogo from "../../../assets/Css.png";
import HtmlLogo from "../../../assets/Html.png";
import JsLogo from "../../../assets/Js.png";
import PythonLogo from "../../../assets/Python.png";
import ReactLogo from "../../../assets/React.png";
import CPlusPlus from "../../../assets/CPlusPlus.png";

const ProgrammingLogos: React.FC = () => {
  return (
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
        <img src={CSharpLogo} alt="C# Logo" className="w-20 h-20 m-2" />
        <img src={CssLogo} alt="CSS Logo" className="w-20 h-20 m-2" />
        <img src={HtmlLogo} alt="HTML Logo" className="w-20 h-20 m-2" />
        <img src={JsLogo} alt="JavaScript Logo" className="w-20 h-20 m-2" />
        <img src={PythonLogo} alt="Python Logo" className="w-20 h-20 m-2" />
        <img src={ReactLogo} alt="React Logo" className="w-20 h-20 m-2" />
        <img src={CPlusPlus} alt="CPlusPlus Logo" className="w-20 h-20 m-2" />
      </div>
    </div>
  );
};

export default ProgrammingLogos;
