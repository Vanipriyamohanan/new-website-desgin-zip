import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./About.css";

function About() {
  return (
    <div>
      <Navbar />
      <div className="container my-4 custom-margin-top">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card shadow p-3 mt-4 mb-4">
              <div className="card-body text-center">
                <h2 className="card-title">About Plus 971 FZE</h2>
                <p className="card-text text-dark">
                  Plus 971 FZE intends to become the market leader in order to
                  deliver an exceptional and efficient service to our buyers and
                  suppliers. Our focus is to build a relationship so that the
                  products we acquire on your behalf are most suited to your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-5" />
    </div>
  );
}

export default About;
