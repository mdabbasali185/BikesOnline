import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("/orders")
            .then(res => {
                setOrders(res.data)
                setLoading(false)
            })
    }, [loading])
    const deleteHandler = (id) => {
        axios.delete(`/orders/${id}`)
            .then(res => {
                setLoading(true)
            })
    }
    return (
        <div>
            <Table striped bordered hover className='text-center fw-bold w-100'>
                <thead>
                    <tr className='fs-md-3 fs-2 bg-info text-secondary'>
                        <th>ProductName</th>
                        <th>email</th>
                        <th>number</th>
                        <th>userName</th>
                        <th>address</th>
                        <th>quantity</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => (
                            <tr key={order._id} className='table-danger'>

                                <td attr='ProductName'>{order.productName}</td>
                                <td attr='email'>{order.email}</td>
                                <td attr='number'>{order.number}</td>
                                <td attr='userName'>{order.userName}</td>
                                <td attr='address'>{order.address}</td>
                                <td attr='quantity'>{order.quantity}</td>
                                <td attr='Action'>
                                    <button onClick={() => deleteHandler(order._id)} className='btn btn-danger'>
                                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                    </button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </div>
    );
};

export default ManageAllOrders;