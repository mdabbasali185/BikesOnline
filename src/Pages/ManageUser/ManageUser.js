import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faSpinner } from '@fortawesome/free-solid-svg-icons'

const ManageUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => setUsers(res.data))
    }, [])
    const deleteHandler = id => { }
    return (
        <div>
            <Table striped bordered hover className='text-center fw-bold w-100'>
                <thead>
                    <tr className='fs-md-3 fs-2 bg-info text-secondary'>
                        <th>Email</th>
                        <th>Role</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user._id} className='table-danger'>
                                <td attr='Email'>{user.email}</td>
                                <td attr='Role'> {user.role ? user.role : 'User'}</td>
                                <td attr='Action'>
                                    <button onClick={() => deleteHandler(user._id)} className='btn btn-danger'>
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

export default ManageUser;