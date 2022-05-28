import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Review = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("/review")
            .then(res => {
                setReviews(res.data)
                setLoading(false)
            })
    }, [loading])

    return (
        <div>
            <Table striped bordered hover className='text-center fw-bold w-100'>
                <thead>
                    <tr className='fs-md-3 fs-2 bg-info text-secondary'>
                        <th>Email</th>
                        <th>Role</th>

                        
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(user => (
                            <tr key={user._id} className='table-danger'>
                                <td attr='Email'>{user.email}</td>
                                <td attr='Role'> {user.role ? user.role : 'User'}</td>

                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </div>
    );
};

export default Review;