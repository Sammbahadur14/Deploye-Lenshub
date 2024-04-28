import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-sec">
          <div className="row footer-itmes">
            <div className="col-md offset">
              <h4>Categories</h4>
              <ul className="list-unstyled ">
                <li>
                  <NavLink to = "/" href="#" className="text-dark ">
                  Aviator Sunglasses
                  </NavLink>
                </li>
                <li>
                  <NavLink to = "/" href="#" className="text-dark">
                  Wayfarer Sunglasses
                  </NavLink>
                </li>
                <li>
                  <NavLink to = "/" href="#" className="text-dark">
                  Round Sunglasses
                  </NavLink>
                </li>
                <li>
                  <NavLink to = "/" href="#" className="text-dark">
                  Cat Eye Sunglasses
                  </NavLink>
                </li>
                <li>
                  <NavLink to = "/" href="#" className="text-dark">
                  Sport Sunglasses
                  </NavLink>
                </li>
                <li>
                  <NavLink to = "/" href="#" className="text-dark">
                  Polarized Sunglasses
                  </NavLink>
                </li>
                <li>
                  <NavLink to = "/" href="#" className="text-dark">
                  Wraparound Sunglasses
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md offset">
              <h4>Quick Links</h4>
              <ul className="list-unstyled ">
                <li>
                  <NavLink to = "/about" href="#" className="text-dark ">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to = "/contact" href="#" className="text-dark">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to = "/contact" href="#" className="text-dark">
                    Email me
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" className="text-dark">
                    Faqs
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" className="text-dark">
                    Terms of use
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" className="text-dark">
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md offset">
              <h4>Get in Touch</h4>
              <ul className="list-unstyled ">
                <li>
                  <NavLink href="#" className="text-dark ">
                    <i class="fa-solid fa-location-dot"></i> Sector-1,
                    Prayagraj, UP
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" className="text-dark">
                    <i class="fa-solid fa-mobile-screen-button"></i> +91
                    8080808080
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" className="text-dark">
                    <i class="fa-solid fa-at"></i> samm445566@gamil.com
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md offset">
              <h4>Newsletter</h4>
              <ul className="list-unstyled ">
                <li>
                  <NavLink href="#" className="text-dark ">
                    <i class="fa-brands fa-linkedin"></i> Follow on Linkidn
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" className="text-dark">
                    <i class="fa-brands fa-facebook"></i> Like on Facebook
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" className="text-dark">
                    <i class="fa-solid fa-at"></i> Email me
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-info">
            <p>
              &copy; 2024 LensHub. All rights reserved | Developed by Samar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
