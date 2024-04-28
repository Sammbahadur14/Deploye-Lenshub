import React from 'react'
import Layout from '../../Component/Layout'
import AdminMenu from '../../Component/AdminMenu'
import { useAuth } from '../../Context/Auth'

const AdminDashboard = () => {
  const [ auth ] = useAuth();
  return (
    <>
    <Layout title={"Admin Dashboard"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>
          <div className="col-md-9">
            <div className="card w-75">
              <h5 className='p-1'> Admin Name: { auth?.user?.name }</h5>
              <h5 className='p-1'> Admin Email: { auth?.user?.email }</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default AdminDashboard
