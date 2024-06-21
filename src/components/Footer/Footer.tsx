import React from "react";
import { baseConfig } from "../../config";
import "./Footer.css";

const Footer = () => {
  return <div className="footer" style={{display:'flex', justifyContent:"center"}}>{baseConfig.footerText}</div>;
};

export default Footer;
