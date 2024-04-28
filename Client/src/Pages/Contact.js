import React from "react";
import Layout from "../Component/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact Us - LensHub"}>
      <section>
        <div className="row contactus ">
          <h1 className=" p-2 text-center">Contact us</h1>
          <hr />
          <div className="col-md-6 reg-pic">
            <img src="https://i.ibb.co/9bz2B87/home2.png" alt="contact" />
          </div>
          <div className="col-md-4">
            <div className="containerr">
              <p className="text-justify">
                For any query and info about prodduct feel free to call anytime
                we 24X7 vaialible
              </p>
              <p className="mt-3">
                <i class="fa-solid fa-globe"></i> www.help@lenshub.com
              </p>
              <p className="">
                <i class="fa-solid fa-phone"></i> 012-3456789
              </p>
              <p className="">
                <i class="fa-solid fa-mobile-screen-button"></i> 1800-0000-0000
                (toll free)
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=12vR5SR_VS-axlDnqDdJ-QVjGGmw&hl=en_US&ehbc=2E312F"
              width={600}
              height={250}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
