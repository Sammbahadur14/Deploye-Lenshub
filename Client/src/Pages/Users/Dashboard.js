import React from 'react'
import Layout from "../../Component/Layout";
import UserMenu from '../../Component/UserMenu';
import { useAuth } from '../../Context/Auth';

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <>
    <Layout title={"Dashboard- e-com"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
          <UserMenu/>
          </div>
          <div className="col-md-9">
          <div className="card w-75 p-3">
            <h4> User name : {auth?.user?.name}</h4>
            <h4> User email : {auth?.user?.email}</h4>
              <h5> User address : {auth?.user?.address}</h5>
          </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Dashboard;