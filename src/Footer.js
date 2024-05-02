import React from "react";
import "./App.css";
import american from "./images/american.png";
import maestro from "./images/maestro.png";
import master from "./images/master.png";
import visa from "./images/visa.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="contact">
          <div className="column">
            <h1>Logo</h1>
            <p>
              10-14 Perent Road,<br></br>
              Colombo, W11 EN,<br></br>
              Srilanka.
            </p>
            <p>0205 334 3671</p>
            <p>samplemail@gmail.com</p>
          </div>
          <div className="column1">
            <ul>
              <li>
                <h3>QUICK LINKS</h3>
              </li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Career</li>
              <li>Check-List</li>
            </ul>
          </div>
          <div className="column2">
            <ul>
              <li>
                <h3>IMPORTANT LINKS</h3>
              </li>
              <li>Payment Policy</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="column3">
            <ul>
              <li>
                <h3>QUICK LINKS</h3>
              </li>
              <li>Visit Example</li>
              <li>Visit Example</li>
              <li>Visit Example</li>
              <li>Visit Example</li>
            </ul>
          </div>
        </div>
        <div className="contact2">
          <div className="newsletter">
            <h1>Join Our Newsletter</h1>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter e-mail address"
                />
                <button type="submit">SUBSCRIBE</button>
              </div>
            </form>
            <p className="newsletter-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              consectetur justo et nunc ultricies, ac consectetur elit
              consectetur. Proin nec augue id neque suscipit vehicula.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Mauris ac turpis vitae libero
              sollicitudin venenatis nec in lectus. Sed ac justo et velit
              aliquam eleifend. Donec tincidunt, nisi sed luctus luctus, dui
              eros fermentum orci, non tempus velit neque sit amet leo. Integer
              fringilla magna ut dolor tempor, quis vestibulum neque bibendum.
              Nulla auctor ligula non dolor accumsan, vel hendrerit purus
              volutpat.
            </p>
          </div>
          <div className="connectus">
            <div className="paymentgate">
              <img src={american} alt="american" />
              <img src={master} alt="american" />
              <img src={visa} alt="american" />
              <img src={maestro} alt="american" />
            </div>
            <h3>CONNECT US |</h3>
            <div className="social"></div>
            <p>&copy; 2009- 2023 Sample loreum ipsu. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
