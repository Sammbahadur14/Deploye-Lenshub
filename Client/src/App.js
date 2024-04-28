import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Users/Dashboard";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import AdminRoute from "./Routes/AdminRoute";
import PrivateRoute from "./Routes/Private";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CreateCategory from "./Pages/Admin/CreateCategory.js";
import CreateProduct from "./Pages/Admin/CreateProduct.js";
import Users from "./Pages/Admin/Users";
import Profile from "./Pages/Users/Profile";
import Orders from "./Pages/Users/Orders";
import Products from "./Pages/Admin/Products.js";
import UpdateProduct from "./Pages/Admin/UpdateProduct.js";
import Search from "./Pages/Search.js";
import ProductDetails from "./Pages/ProjectDetails.js";
import Categories from "./Pages/Categories.js";
import CategoryProduct from "./Pages/CategoryProducts.js";
import CartPage from "./Pages/CartPage.js";
import Contact from "./Pages/Contact.js";
import AdminOrders from "./Pages/Admin/AdminOrder.js";
import BlogPage from "./Pages/BlogPage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/product/:slug" element={<ProductDetails/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/category/:slug" element={<CategoryProduct/>}/>
        <Route path="/search" element={<Search/>} />
        <Route path="/dashboard" element={<PrivateRoute/> }>
          <Route path="user" element={<Dashboard/>}/>
          <Route path="user/profile" element={<Profile/>}/>
          <Route path="user/orders" element={<Orders/>}/>
          <Route path="admin/orders" element={<AdminOrders/>}/>
        </Route>
        <Route path="/dashboard" element = { <AdminRoute/>}>
           <Route path="admin" element = {<AdminDashboard/>}/>
           <Route path="admin/create-category" element = {<CreateCategory/>}/>
           <Route path="admin/create-product" element = {<CreateProduct/>}/>
           <Route path="admin/product/:slug" element = {<UpdateProduct/>}/>
           <Route path="admin/products" element = {<Products/>}/>
           <Route path="admin/users" element = {<Users/>}/>
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
