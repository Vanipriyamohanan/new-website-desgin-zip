import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css'
import phoneImage from '../components/phone.png';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 contact">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-details">
              <h2>Plus 971 FZE</h2>
              <address>
                6WA G23 Dubai Airport Free Zone,<br />
                P.O. Box 56901, Dubai,<br />
                United Arab Emirates
                Landline: +971 (0)454 865 77
                Email:  sales@plus971.ae
                <br></br>
                <a id="link-tag" href="http://www.plus971.ae/">www.plus971.ae</a>
              </address>
              <p>Landline: +971 (0)454 865 77</p>
             <div className="animated-div"> 
             <img className="img-img-img" src={phoneImage} alt="Phone Icon" />
             </div>
             <h1 className="contact-ht-us">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
