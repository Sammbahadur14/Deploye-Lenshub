import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Layout from "../../Component/Layout.js";
import AdminMenu from "../../Component/AdminMenu.js";
import axios from "axios";

const Users = () => {
  // State to hold the user data
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const { data: response } = await axios.get("/api/v1/auth/allusers");
      // Assuming the response data is an array of users directly
      setUsers(response);
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong");
    }
  };

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Layout title={"Dashboard - All Users"}>
        <section>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h3>All Users</h3>
              <hr />
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, n) => (
                    <tr>
                      <th scope="row">{n+1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </section>
      </Layout>
    </>
  );
};

export default Users;
