import React from 'react';
import { Table } from 'react-bootstrap';

const Review = () => {
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
                {/* <tbody>
                    {
                        users.map(user => (
                            <tr key={user._id} className='table-danger'>
                                <td attr='Email'>{user.email}</td>
                                <td attr='Role'> {user.role ? user.role : 'User'}</td>
                                <td attr='Action'>
                                    <button onClick={() => deleteHandler(user._id)} className='btn btn-danger'>
                                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                                    </button>
                                    <button onClick={() => adminHandler(user._id)} className='btn btn-info'>
                                        MakeAdmin
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody> */}

            </Table>
        </div>
    );
};

export default Review;