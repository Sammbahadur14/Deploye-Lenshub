import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Helmet} from "react-helmet";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}/>
        <meta name="author" content= {author} />

        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        {children}
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = 
{
  title: "LensHub",
  description: "Full stack Projects",
  keywords: "MERN, React, Node, MongoDB"
}

export default Layout;
