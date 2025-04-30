import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const appStartYear = import.meta.env.VITE_APP_YEAR
  return (
    <footer
      className="footer bg-body-tertiary"
      style={{
        boxShadow: "0 -4px 4px rgba(0,0,0,.08),0 -2px 12px rgba(0,0,0,.08)",
        padding: "10px",
      }}
    >
      <h4 className="text-center">
        All rights reserved &copy;
        {new Date().getFullYear() === appStartYear
          ? new Date().getFullYear()
          : `${appStartYear} - ${new Date().getFullYear()}`}{" "}
        {import.meta.env.VITE_APP_NAME}.com
      </h4>
      <p className="text-center">
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/contact">Contact Us</Link> |{" "}
        <Link to="/policy">Privacy policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
