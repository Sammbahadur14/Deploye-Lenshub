import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../../Component/Layout";
import { useAuth } from "../../Context/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false); // flag for succesfull login
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // Form Control
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setLoginSuccess(true);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Navigate after successful login
  if (loginSuccess) {
    navigate(location.state || "/");
  }

  // Notify Function
  const notify = () => toast.success("Login successfully");

  return (
    <>
      <Layout title={"Login - LensHub"}>
        <section>
          <div className=" text-center heading">
            <h3>Login now</h3>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 reg-pic">
                <img src="https://i.ibb.co/vmjVM2H/man2.gif"/>
              </div>
              <div className="col-md-6">
                
          <div className=" form-input">
            <form onSubmit={handleSubmit}>
              <div className="mb-3"></div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control"
                  id="exampleInputEmail3"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword3" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control"
                  id="exampleInputPassword4"
                />
              </div>
              <button
                type="submit"
                onClick={notify}
                className="btn btn-info"
              >
                Login now
              </button>
              <button
                type="submit"
                onClick={() => {navigate("/forgot-password")}}
                className="btn btn-info ms-3"
              >
                Forgot password
              </button>
            </form>
          </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Login;
