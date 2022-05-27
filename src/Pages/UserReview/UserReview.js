import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import userReviewImg from "../../Images/userReview.png"
import "./UserReview.css"

const UserReview = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img className='w-25' variant="top" src={userReviewImg} />
                    <Card.Body>
                        <Card.Title className='fw-bold'><span className='text-info'>User: </span>admin</Card.Title>
                        <Card.Text className='fw-bold'>
                            <span className='text-info'>Email: </span>  admin@admin.com
                        </Card.Text>
                        <Card.Text className='fw-bold'>
                            <span className='text-info'>Review: </span> always provide good product
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img className='w-25' variant="top" src={userReviewImg} />
                    <Card.Body>
                        <Card.Title className='fw-bold'><span className='text-info'>User: </span>admin</Card.Title>
                        <Card.Text className='fw-bold'>
                            <span className='text-info'>Email: </span>  admin@admin.com
                        </Card.Text>
                        <Card.Text className='fw-bold'>
                            <span className='text-info'>Review: </span> 88
                        </Card.Text>
                    </Card.Body>

                </Card>

            </CardGroup>
        </div>
    );
};

export default UserReview;