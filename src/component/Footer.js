import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-4">
              <h5>Open Time</h5>
              <div className="d-flex align-items-center">
                <FaHome className="footer-icon mr-3" />
                <div>
                  <p>Mon-Friday 9-6 pm</p>
                  <p>Mon-Sunday 8-5 pm</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h5>Phone</h5>
              <h6>
                <FaPhone className="footer-icon mr-3" />
                +971 52 531 7264
              </h6>
            </div>
            <div className="mb-4">
              <h5>Email</h5>
              <h6>
                <FaMailBulk className="footer-icon mr-3" />
                sales@plus971.ae
              </h6>
            </div>
          </div>
          <div className="col-md-6">
            <p className="mb-4">
              Plus 971 FZE, based in UAE (Dubai Airport Free Zone), is licensed
              in trading of games consoles, mobile phones, electronic equipment
              and computer hardware.
            </p>
            <div>
              <h5>Follow Us</h5>
              <div className="social">
                <FaFacebook className="footer-icon mr-3" />
                <FaTwitter className="footer-icon mr-3" />
                <FaInstagram className="footer-icon mr-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
