import { useState, useEffect } from "react";
import { useAuth } from "../Context/Auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Component/Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate(); // Access navigate function from react-router-dom

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("/api/v1/auth/admin-auth");
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
          // Redirect to login page or show error message
          navigate("/login"); // Example redirect to login page
        }
      } catch (error) {
        console.error("Error while checking admin authentication:", error);
        // Handle other errors here
      } finally {
        setLoading(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token, navigate]);

  return ok ? <Outlet /> : <Spinner path = ""/>;
}
