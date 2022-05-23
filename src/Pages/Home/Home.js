import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import mobile from '../../Images/Samsung-Galaxy-J3-LCD-Screen-Display-and-Touch-Panel-Digitizer-Assembly-Replacement-1.jpg';
import './Home.css';


const Home = () => {

    const [loading, setLoading] = useState(true)





    if (loading) {
        return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>
    }


    return (
        <div>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src={mobile}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Designed with precision</h1>
                            <p>The quicker, the better.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src={mobile}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>Made affordable for you</h1>
                            <p>Your office companion.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src={mobile}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>IT experiences made better</h1>
                            <p>Let your fingers do the talking.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div >
    );
};

export default Home;