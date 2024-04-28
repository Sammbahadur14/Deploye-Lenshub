import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = ({ path = "login"}) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
        setCount((prevValue) => prevValue - 1);
    }, 1000);

    // Check if count reaches 0 or 1 for navigation
    if (count === 0) {
        console.log("Navigating to login page");
        navigate(`/${path}`, { state: location.pathname });
    } else {
        console.log(`Count: ${count}`);
    }

    return () => clearInterval(interval);
}, [count, navigate, location, path]);


  return (
    <>
      <div
        className="d-flex justify-content-center align-item-center"
        style={{ height: "50vh" }}
      >
        <h3 className="text-column ">Redirecting to you in {count} second!</h3>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;