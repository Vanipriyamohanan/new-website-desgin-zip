import React from "react";
import Navbar from "../component/Navbar";
import Heroimg from "../component/Heroimg";
import Footer from "../component/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <div className="home-container">
        <h1>Where we located</h1>
        <p>
          Plus 971 FZE, based in UAE (Dubai Airport Free Zone), is licensed in
          trading of games consoles, mobile phones, electronic equipment and
          computer hardware
        </p>
        <h1>How Old we are</h1>
        <p>
          We have been in the business for decades with outstanding record in
          local and international market for our integrity and reliability. We
          have captured a wide range of customers and trusty suppliers inside
          and outside UAE like Hong Kong, Singapore, USA, UK, Europe and other
          parts of Middle East. With today’s fast-moving industry we are
          continually updating new suppliers and expanding our sources to give
          you a guarantee that we can provide the latest products of the highest
          quality at the most competitive prices.
        </p>
        <h1>Our mission</h1>
        <p>
          Plus 971 FZE, intends to become the market leader in order to deliver
          an exceptional and efficient service to our buyers and suppliers. Our
          focus is to build a relationship so that the products we acquire on
          your behalf are most suited to your needs
        </p>
        <h1>How reach us</h1>
        <p>
          Please find attached herewith our Trade License, VAT Certificate and
          bank details To trade with us, kindly fill the Trade Application and
          furnish the documents listed in the checklist under the trade
          application. All information provided will be strictly confidential.
          This will simplify our background checks.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
