import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import auth from '../../Firebase/firebase.init';
import './SingleItems.css';

const SingleItems = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const [addQuantity, setAddQuantity] = useState([])
    const [userName, setUserName] = useState('')
    const [review, setReview] = useState('')
    const [user] = useAuthState(auth)
    useEffect(() => {

    }, [])

    const { description, supplier, name, quantity: maxQuantity, image, price, limit, email } = item;

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
                setLoading(true)
            })
    }

    const handleOrder = e => {
        e.preventDefault()
        const { email, number, userName, address, quantity } = e.target

        if (parseInt(quantity.value) > parseInt(maxQuantity) || parseInt(quantity.value) < parseInt(limit)) {
            toast.error(`quantity value must be greater than ${limit} & smaller than ${maxQuantity}`, { theme: 'colored' });
        } else {
            const newOrder = {
                productName: name,
                email: email.value,
                number: number.value,
                userName: userName.value,
                address: address.value,
                quantity: quantity.value
            }
            axios.post('/orders', newOrder)
                .then(res => setLoading(true))
        }
    }

    if (loading) {
        return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>
    }



    return (
        <div className='card-compo py-5'>
            <div className='container py-5 loadItems '>
                <div className="row align-items-center my-4">
                    <div className="col-md-7">
                        <div className="card mb-3 ">
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
                                            parseInt(maxQuantity) > 0 ? maxQuantity : "SoldOut"
                                        }</p>
                                        <p className="card-text fs-4 text-info fw-bold"><strong className='text-secondary'>Price:</strong> {price}</p>
                                        <p className="card-text fs-4 text-info fw-bold"><strong className='text-secondary'>Limit:</strong> {limit}</p>


                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-5">
                        <div className="addNew pb-4">
                            <div className="container">
                                <div className="text-center">
                                    <div className="login-title my-4 text-secondary fw-bold fs-1 bg-dark  p-2 d-inline-block mx-auto ">Review</div>
                                </div>
                                <form className="login-form mx-auto w-75  addForm p-4 mt-2" onSubmit={handleReview}>
                                    <input
                                        className="form-control text-info fw-bold"
                                        type="email"
                                        placeholder="Your Email"
                                        value={user.email}
                                        required
                                        readOnly
                                    />

                                    <input
                                        className="form-control text-info fw-bold mt-3"
                                        type="text"
                                        placeholder="userName"
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                        value={userName}
                                    />
                                    <textarea
                                        className="form-control text-info fw-bold mt-3"
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

                <div className="addNew ">
                    <div className="container">
                        <div className="text-center">
                            <div className="login-title my-4 text-secondary fw-bold fs-1 bg-dark  p-2 d-inline-block mx-auto ">Place Order</div>
                        </div>
                        <form className="login-form mx-auto w-50 addForm p-4 mt-2" onSubmit={handleOrder}>
                            <input
                                className="form-control text-info fw-bold"
                                type="email"
                                name='email'
                                placeholder="Your Email"
                                value={user.email}
                                required
                                readOnly
                            />

                            <input
                                className="form-control text-info fw-bold mt-3"
                                type="text"
                                placeholder="userName"
                                name="userName"
                                required

                            />
                            <input
                                className="form-control text-info fw-bold mt-3"
                                type="text"
                                placeholder="address"
                                name="address"
                                required

                            />
                            <input
                                className="form-control text-info fw-bold mt-3"
                                type="text"
                                placeholder="number"
                                name="number"
                                required

                            />
                            <input
                                className="form-control text-info fw-bold mt-3"
                                type="number"
                                placeholder="quantity"
                                name="quantity"
                                required
                                defaultValue={limit}
                            />


                            <button className="animated-button d-block mx-auto m-2"> <span className="py-2 text-white">Place Order</span> </button>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItems;