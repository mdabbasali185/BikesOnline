import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import './SingleItems.css';

const SingleItems = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const [addQuantity, setAddQuantity] = useState([])
    const [userName, setUserName] = useState('')
    const [review, setReview] = useState('')
    useEffect(() => {

    }, [])

    const { description, supplier, name, quantity, image, price, limit, email } = item;

    useEffect(() => {
        axios.get(`/product/${id}`)
            .then(res => {
                setItem(res.data)
                setLoading(false)
            })
    }, [id, loading])


    const handleReview = e => {

        e.preventDefault()
        axios.post('/review', { userName, email, review })
            .then(res => {
                console.log(res.data)
            })
    }

    if (loading) {
        return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>
    }



    return (
        <div className='card-compo py-5'>
            <div className='container py-5 loadItems '>
                <div className="card mb-3 w-75 mx-auto">
                    <div className="row g-0 ">

                        <div className="col-md-4 col-lg-4  align-items-stretch d-flex">
                            <img src={image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8 col-lg-8">
                            <div className="card-body">
                                <h5 className="card-title fs-3 text-info"><strong className='text-secondary'>Name:</strong> {name}</h5>
                                <p className="card-text fs-4 text-secondary"><strong>Description:</strong> {description}</p>
                                <p className="card-text fs-4 text-secondary"><strong>Supplier:</strong> {supplier}</p>
                                <p className="card-text fs-4 text-secondary"><strong>Quantity:</strong> {
                                    parseInt(quantity) > 0 ? quantity : "SoldOut"
                                }</p>
                                <p className="card-text fs-4 text-info fw-bold"><strong className='text-secondary'>Price:</strong> {price}</p>
                                <p className="card-text fs-4 text-info fw-bold"><strong className='text-secondary'>Limit:</strong> {limit}</p>


                            </div>
                        </div>
                    </div>

                </div>

                <div className="addNew ">
                    <div className="container">
                        <div className="text-center">
                            <div className="login-title my-4 text-secondary fw-bold fs-1 bg-dark  p-2 d-inline-block mx-auto ">Review</div>
                        </div>
                        <form className="login-form mx-auto w-50 addForm p-4 mt-2" onSubmit={handleReview}>
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                required
                                readOnly
                            />

                            <input
                                className="form-control mt-3"
                                type="text"
                                placeholder="userName"
                                onChange={(e) => setUserName(e.target.value)}
                                required
                                value={userName}
                            />
                            <textarea
                                className="form-control mt-3"
                                rows={5}
                                placeholder="review"
                                onChange={(e) => setReview(e.target.value)}
                                required
                                value={review}
                            />

                            <button className="animated-button d-block mx-auto m-2"> <span className="py-2 text-white">Add Review</span> </button>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItems;