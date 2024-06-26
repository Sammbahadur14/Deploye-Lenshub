import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../Hooks/UseCategory";
import Layout from "../Component/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <section>
      <div className="container">
        <div className="row">
      <header>
        <h1>All Categories</h1>
        <hr/>
      </header>
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn btn-info">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      </section>
    </Layout>
  );
};

export default Categories;