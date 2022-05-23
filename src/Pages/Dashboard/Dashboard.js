import React from 'react';
import { NavLink } from "react-bootstrap";
import './Dashboard.css'


const Dashboard = () => {
    return (
        <section>
            <div className='sidebar'>
                <div className='sidebar-brand'>
                    <h1><span className='las dashboard'>Dashboard</span></h1>

                </div>

            </div>
            <div className='sidebar-menu'>
                <NavLink to='/dashboard/'>My Order</NavLink>
                <NavLink to='/dashboard/review'>Add A Review</NavLink>
                <NavLink to='/dashboard/profile'>My Profile</NavLink>
                <NavLink to='/dashboard/all-orders'>Manage All Orders</NavLink>
                <NavLink to='/dashboard/product'>Add A Product</NavLink>
                <NavLink to='/dashboard/manage-products'>Manage Products</NavLink>

            </div>
            <div>

            </div>
        </section>
    );
};

export default Dashboard;