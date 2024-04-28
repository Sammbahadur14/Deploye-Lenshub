import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../Component/Layout";
const PageNotFound = () => {
  return (
    <>
      <Layout title={"Page not found - e-com"}>
          <div className="home-head text-center mt-5">
            <h3>Page Not Found</h3>
          <NavLink to="/">Back to home</NavLink>
          </div>
      </Layout>
    </>
  );
};

export default PageNotFound;