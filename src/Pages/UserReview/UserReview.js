import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import userReviewImg from "../../Images/userReview.png"
import "./UserReview.css"

const UserReview = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("/review?limit=3")
            .then(res => {
                setReviews(res.data)
                setLoading(false)
            })
    }, [loading])
    return (
        <div>
            <CardGroup>
                {
                    reviews.map(review => (
                        <Card>
                            <Card.Img className='w-25' variant="top" src={userReviewImg} />
                            <Card.Body>
                                <Card.Title className='fw-bold'><span className='text-info'>User: </span>{review.username}</Card.Title>
                                <Card.Text className='fw-bold'>
                                    <span className='text-info'>Email: </span> {review.email}
                                </Card.Text>
                                <Card.Text className='fw-bold'>
                                    <span className='text-info'>Review: </span> {review.review}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    ))
                }


            </CardGroup>
        </div>
    );
};

export default UserReview;