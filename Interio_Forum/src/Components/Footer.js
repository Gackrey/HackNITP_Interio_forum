import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-dark text-white mt-6">
      <div className="d-flex justify-content-center container">
        <div className="mx-4 my-4">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Team</p>
          <p>Careers</p>
        </div>

        <div className="mx-4 my-4">
          <h4>Contact</h4>
          <p>Help & Support</p>
          <p>Partner with us</p>
        </div>

        <div className="mx-4 my-4">
          <h4>Legal</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Offer Terms</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
