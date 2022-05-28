import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Dashboard.css'


const Dashboard = () => {
    return (
        <section className='d-flex h-100 align-items-stretch'>
            <div className='sidebar'>


                <NavLink className={({ isActive }) =>
                    isActive ? "link-active link" : "link"
                } to='/dashboard/my_items'>My Order</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "link-active link" : "link"
                } to='/dashboard/review'>Add A Review</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "link-active link" : "link"
                } to='/dashboard/profile'>My Profile</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "link-active link" : "link"
                } to='/dashboard/manage-all-orders'>Manage All Orders</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "link-active link" : "link"
                } to='/dashboard/'>Add A Product</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "link-active link" : "link"
                } to='/dashboard/manage_inventory'>Manage Products</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "link-active link" : "link"
                } to='/dashboard/manageAllUser'>Manage All User</NavLink>


            </div>
            <div className='w-100'>
                <Outlet />
            </div>
        </section>
    );
};

export default Dashboard;