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
    <>
      <img src={CSharpLogo} alt="C# Logo" className="w-20 h-20 m-2" />
      <img src={CssLogo} alt="CSS Logo" className="w-20 h-20 m-2" />
      <img src={HtmlLogo} alt="HTML Logo" className="w-20 h-20 m-2" />
      <img src={JsLogo} alt="JavaScript Logo" className="w-20 h-20 m-2" />
      <img src={PythonLogo} alt="Python Logo" className="w-20 h-20 m-2" />
      <img src={ReactLogo} alt="React Logo" className="w-20 h-20 m-2" />
      <img src={CPlusPlus} alt="CPlusPlus Logo" className="w-20 h-20 m-2" />
    </>
  );
};

export default ProgrammingLogos;
