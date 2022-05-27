import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';
import './Dashboard.css'


const Dashboard = () => {
    return (
        <section className='d-flex h-100 align-items-stretch'>
            <div className='sidebar'>


                <NavLink to='/dashboard/my_items'>My Order</NavLink>
                <NavLink to='/dashboard/review'>Add A Review</NavLink>
                <NavLink to='/dashboard/profile'>My Profile</NavLink>
                <NavLink to='/dashboard/manage-all-orders'>Manage All Orders</NavLink>
                <NavLink to='/dashboard'>Add A Product</NavLink>
                <NavLink to='/dashboard/manage_inventory'>Manage Products</NavLink>
                <NavLink to='/dashboard/manageAllUser'>Manage All User</NavLink>


            </div>
            <div className='w-100'>
                <Outlet />
            </div>
        </section>
    );
};

export default Dashboard;