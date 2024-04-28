import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Layout from "../../Component/Layout";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // flag for succesfull registration
  const navigate = useNavigate();

  // Form Control
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        address,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setRegistrationSuccess(true);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Navigate after successful registration
  if (registrationSuccess) {
    navigate("/login");
  }
  //console.log(process.env.REACT_APP_API);

  // Notify Function
  const notify = () => toast.success("Registerd successfully");

  return (
    <>
      <Layout title={"Register | LensHub"}>
        <section>
          <div className=" text-center heading">
            <h3>Register now</h3>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-6">

            <div className=" m-5 form-input">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="YourName" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-control"
                  placeholder="Type your name ?"
                />
              </div>
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
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Type your address ?"
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
                  placeholder="Please fill this area ?"
                />

                <div className="mb-3">
                  <br/>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Your Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Address"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword5" className="form-label">
                  Security answer
                </label>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                  className="form-control"
                  id="exampleInputPassword6"
                  placeholder="What is your favorite Sports game ?"
                />
              </div>
              <button
                type="submit"
                onClick={notify}
                className="btn btn-info"
              >
                Register now
              </button>
            </form>
          </div>

            </div>
            <div className="col-md-6 reg-pic">
              <img src="https://i.ibb.co/vY5d8MN/Securelogin.gif"/>
              {/* <img src="https://i.ibb.co/3hJzZ3d/man-1459246-1920.png"/>               */}
            </div>
          </div>
                  </section>
      </Layout>
    </>
  );
};

export default Register;
