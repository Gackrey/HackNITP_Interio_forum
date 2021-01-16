import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-dark text-white mt-6">
      <div className="row">
        <div className="col">
          <div className="container">
            <span className="mt-2  ">
              Contact : +33 123-441-055 <FaPhoneAlt />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
