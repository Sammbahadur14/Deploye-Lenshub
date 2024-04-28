import React from 'react'
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../Component/Layout";
//import { useAuth } from "../../Context/Auth";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false); // flag for succesfull login
   // const [auth, setAuth] = useAuth();
  
    const navigate = useNavigate();
  
    useEffect(() => {
        // Navigate after successful login
        if (loginSuccess) {
          navigate("/login");
        }
      }, [loginSuccess, navigate]);
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("/api/v1/auth/forgot-password", {
            email,
            newPassword,
            answer
          });
          if (res.data.success) {
            toast.success(res.data.message);
            setLoginSuccess(true);
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log("Error:", error);
          toast.error("An error occurred. Please try again later.");
        }
      };
  
    // Notify Function
    const notify = () => toast.success("Login successfully");
  
  return (
    <>
      <Layout title={"Forgot password | e-com"}>
        <section>
          <div className=" m-5 text-center heading">
            <h3>Reset password</h3>
            <hr />
          </div>
          <div className=" m-5 form-input">
            <form onSubmit={handleSubmit}>
              <div className="mb-3"></div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                 New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword3" className="form-label">
                  Security answer
                </label>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                  className="form-control"
                  id="exampleInputPassword4"
                />
              </div>
              <button
                type="submit"
                onClick={notify}
                className="btn btn-primary"
              >
                Reset Password
              </button>
            </form>
          </div>
        </section>
    </Layout>
    </>
  )
}

export default ForgotPassword
