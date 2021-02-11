import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app-footer-container">
      <div>
        <p>About Us</p>
        <p>Student Discount</p>
        <p>Coupons</p>
      </div>
      <div>
        <p>Contact Us</p>
        <p>Customer Service</p>
      </div>
      <div>
        <p>FAQ</p>
        <p>Order Status</p>
      </div>
      <div>
        <p>Call Us: +123 456789</p>
        <p>Hours: Monday-Friday 10:00-21:00</p>
      </div>
    </div>
  );
};

export default Footer;
