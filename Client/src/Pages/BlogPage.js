import React from "react";
import Layout from "../Component/Layout";

const BlogPage = () => {
  return (
    <>
      <Layout title={"Blog - LensHub"}>
        <section>
        <header>
          <h1>Customer Reviews - LensHub</h1>
          <hr/>
        </header>
        <div class="container">
          <div class="review">
            <h3>John Doe</h3>
            <p>
              <strong>Rating:</strong> 5 stars
            </p>
            <p>
              <strong>Review:</strong> "Excellent selection of lenses. The
              ordering process was smooth, and I received my lenses quickly.
              Will definitely buy from LensHub again!"
            </p>
          </div>
          <div class="review">
            <h3>Jane Smith</h3>
            <p>
              <strong>Rating:</strong> 4 stars
            </p>
            <p>
              <strong>Review:</strong> "Great customer service! Had a small
              issue with my order, but it was resolved promptly by their support
              team. Quality lenses too!"
            </p>
          </div>
          <div class="review">
            <h3>Michael Johnson</h3>
            <p>
              <strong>Rating:</strong> 3 stars
            </p>
            <p>
              <strong>Review:</strong> "Decent selection, but delivery took
              longer than expected. Lenses were good quality though."
            </p>
          </div>
          <div class="review">
            <h3>Jane Smith</h3>
            <p>
              <strong>Rating:</strong> 4 stars
            </p>
            <p>
              <strong>Review:</strong> "Great customer service! Had a small
              issue with my order, but it was resolved promptly by their support
              team. Quality lenses too!"
            </p>
          </div>
          <div class="review">
            <h3>Michael Johnson</h3>
            <p>
              <strong>Rating:</strong> 3 stars
            </p>
            <p>
              <strong>Review:</strong> "Decent selection, but delivery took
              longer than expected. Lenses were good quality though."
            </p>
          </div>
          <div class="review">
            <h3>Jane Smith</h3>
            <p>
              <strong>Rating:</strong> 4 stars
            </p>
            <p>
              <strong>Review:</strong> "Great customer service! Had a small
              issue with my order, but it was resolved promptly by their support
              team. Quality lenses too!"
            </p>
          </div>
          <div class="review">
            <h3>Michael Johnson</h3>
            <p>
              <strong>Rating:</strong> 3 stars
            </p>
            <p>
              <strong>Review:</strong> "Decent selection, but delivery took
              longer than expected. Lenses were good quality though."
            </p>
          </div>
        </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogPage;
