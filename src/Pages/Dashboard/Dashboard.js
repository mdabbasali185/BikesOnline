import React from 'react';
import { NavLink } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import './Dashboard.css'


const Dashboard = () => {
    return (
        <section className='d-flex h-100'>
            <div className='sidebar'>


                <NavLink to='/dashboard/'>My Order</NavLink>
                <NavLink to='/dashboard/review'>Add A Review</NavLink>
                <NavLink to='/dashboard/profile'>My Profile</NavLink>
                <NavLink to='/dashboard/all-orders'>Manage All Orders</NavLink>
                <NavLink to='/dashboard/product'>Add A Product</NavLink>
                <NavLink to='/dashboard/manage-products'>Manage Products</NavLink>


            </div>
            <div className='w-100'>
                <Outlet />
            </div>
        </section>
    );
};

export default Dashboard;