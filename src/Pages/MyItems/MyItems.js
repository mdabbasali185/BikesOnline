import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyItems = () => {

    const [myItems, setMyItems] = useState([])


    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            axios.get('/my-items', {
                headers: {
                    Authorization: token
                }
            })
                .then(res => setMyItems(res.data))
        }

    }, [token])



    return (
        <div className='py-5'>
            <div className='container '>
                <div className="">
                    <Row xs={1} md={2} lg={3} className="g-5 mt-3 mb-5 align-items-stretch">
                        {myItems.map(myItem => (
                            <Col key={myItem._id}>
                                <Card className='h-100'>

                                    <Card.Body>
                                        <Card.Title className='fs-3 fw-bold text-info'><strong className=' text-secondary'> <strong className='text-secondary'>Name:</strong></strong> {myItem.productName}</Card.Title>
                                        <Card.Text className='text-secondary fs-5'>
                                            <strong>Address:</strong> {myItem.address}
                                        </Card.Text>
                                        <p className='text-info fs-5 fw-bold'><strong className='text-secondary'>Mobile Number:</strong> {myItem.number}</p>
                                        <p className='text-info fs-5 fw-bold'><strong className='text-secondary'>User Name:</strong> {myItem.userName}</p>

                                        <p className="fw-bold">Quantity:{
                                            parseInt(myItem.quantity) > 0 ? myItem.quantity : "SoldOut"}</p>


                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </div>
            </div>
        </div>
    );
};

export default MyItems;