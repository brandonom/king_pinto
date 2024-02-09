import React from "react";
import "../styles/footer.scss";

import Logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer className="w-full bg-black p-2 mt-14">
      <div className="text-black flex flex-col md:flex-row justify-center md:justify-between items-center mx-auto px-2">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="underline">Contact:</h3>
          <ul>
            <li>Phone: (555)-657-8965</li>
            <li>Email: urbanvogue@gmail.com</li>
          </ul>
        </div>

        {/* Centered Logo */}
        <div className="flex items-center justify-center md:mr-40">
          {/* <img src={Logo} alt="logo-ct" className="w-10" /> */}
        </div>

        {/* Copyright */}
        <div className="mt-20 text-center md:text-left">
          <p className="text-white italic font-normal mt-4 md:mt-0">
            &copy; 2024 King Pinto
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
