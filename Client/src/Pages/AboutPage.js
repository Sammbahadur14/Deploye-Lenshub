import React from "react";
import Layout from "../Component/Layout";

const About = () => {
  return (
    <Layout title={"About us - LensHub"}>
      <section>
      <header>
        <h1>About LensHub</h1>
        <hr/>
      </header>
      <div class="container">
        <div className="row">
          <div className="col-md-4">
            <div className="reg-pic">
              <img src="https://i.ibb.co/GptkCPr/man3.gif" alt="About" />
            </div>
          </div>
          <div className="col-md-8">
            <section class="about-section">
              <h2>Our Mission</h2>
              <p>
                LensHub is dedicated to providing high-quality lenses and
                eyewear products to our customers. We aim to offer the best
                selection of lenses for all vision needs while delivering
                exceptional customer service.
              </p>
            </section>
            <section class="about-section">
              <h2>Our Team</h2>
              <p>
                At LensHub, we have a team of experienced professionals who are
                passionate about eyewear and dedicated to ensuring that our
                customers find the perfect lenses for their needs. Our team is
                committed to excellence in both product quality and customer
                satisfaction.
              </p>
            </section>
            <section class="about-section">
              <h2>Contact Us</h2>
              <p>
                If you have any questions, feedback, or inquiries, please don't
                hesitate to contact us. You can reach us via email at
                info@lenshub.com or by phone at 1-800-123-4567. We look forward
                to hearing from you!
              </p>
            </section>
          </div>
        </div>
      </div>
      </section>
    </Layout>
  );
};

export default About;
