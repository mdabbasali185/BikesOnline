import React from 'react';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ownPic from '../../Images/Co-6005=.jpg'
import { ProgressBar } from 'react-bootstrap';
import ESTORE from '../../Images/wearhouse.png'
import GYM from '../../Images/gym.jpg'
import CarParadise from '../../Images/carparadise.jpg'




const Portfolio = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row d-flex align-items-center justify-content-center ">
                    <div className="col-lg-6">
                        <img className="img-edit img-fluid" src={ownPic} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h3>Hi There</h3>
                        <h1>
                            I am <span className="text-primary">Md Abbas Ali</span>
                        </h1>
                        <p>
                            I am Bangladeshi web designer and developer focused on Front End
                            Developer. I will make suer clean and user friendly experience. My
                            passionate about building excellent website and improve about
                            building.
                        </p>
                        <button className="btn btn-primary"> Explore me</button>
                    </div>
                </div>
                <div>
                    <h1 className="fw-bold text-center my-4">
                        About <span className="text-primary">Me</span>
                    </h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="fw-bold my-3">PERSONAL INFORMATION</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        NAME: <span className="fw-bold">Md Abbas Ali</span>
                                    </p>
                                    <p>
                                        AGE: <span className="fw-bold">21</span>
                                    </p>
                                    <p>
                                        NATIONALITY: <span className="fw-bold">Bangladeshi</span>
                                    </p>
                                    <p>
                                        Work Status: <span className="fw-bold">Available</span>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p>
                                        Address: <span className="fw-bold">Dhaka Bangladesh</span>
                                    </p>
                                    <p>
                                        Phone: <span className="fw-bold">+88 01962844395</span>
                                    </p>
                                    <p>
                                        Email:
                                        <span className="fw-bold">mdabbasali185@gmail.com</span>
                                    </p>
                                    <p>
                                        Language: <span className="fw-bold">Bangla, English</span>
                                    </p>
                                </div>
                            </div>
                            <a href="https://drive.google.com/file/d/1rl6qoc1-3xQ3avf3vzbt8YedM0cBVkaN/view?usp=sharing" target='_blank' rel="noreferrer">
                                <button className="btn btn-primary">Download Resume</button>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">HTML</label>
                            <ProgressBar striped variant="success" now={98} />
                            <label htmlFor="">CSS</label>
                            <ProgressBar striped variant="info" now={87} />
                            <label htmlFor="">JS</label>
                            <ProgressBar striped variant="warning" now={76} />
                            <label htmlFor="">REACT</label>
                            <ProgressBar striped variant="danger" now={88} />
                            <label htmlFor="">MONGO DB</label>
                            <ProgressBar striped variant="success" now={61} />
                            <label htmlFor="">EXPRESS</label>
                            <ProgressBar striped variant="info" now={55} />
                            <label htmlFor="">NODE</label>
                            <ProgressBar striped variant="warning" now={30} />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="fw-bold my-5 text-center">Recent <span className="text-primary">Project</span></h1>
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <img className="img-fluid" src={ESTORE} alt="" />
                            <h3>ESTORE</h3>
                            <p> MERN stack inventory management website</p>
                            <a target='_blank' href="https://wearhouse-e465d.web.app/" rel="noreferrer">
                                <button className="btn btn-primary">Live Preview</button>
                            </a>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="img-fluid" src={GYM} alt="" />
                            <h3>Gym</h3>
                            <p>A Fitness gym website.</p>
                            <a target='_blank' href="https://gym-55c6d.web.app/" rel="noreferrer">
                                <button className="btn btn-primary">Live Preview</button>
                            </a>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="img-fluid" src={CarParadise} alt="" />
                            <h3>CarParadise</h3>
                            <p>All kind of branded car you purchase here.</p>
                            <a target='_blank' href="https://carparadisemdabbasali.netlify.app/" rel="noreferrer">
                                <button className="btn btn-primary">Live Preview</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="social_media py-5 mt-5 bg-secondary ">
                    <div className='d-flex mb-3 container justify-content-center'>
                        <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='https://www.facebook.com/mdabbasali185'><FontAwesomeIcon className='px-2 fs-1 fb' icon={faFacebook}></FontAwesomeIcon></a>
                        <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='https://github.com/mdabbasali185'><FontAwesomeIcon className='px-2 fs-1 github' icon={faGithub}></FontAwesomeIcon></a>
                        <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='mailto:mdabbasali185@gmail.com'><FontAwesomeIcon className='px-2 fs-1 google' icon={faGoogle}></FontAwesomeIcon></a>
                        <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='https://www.instagram.com/mdabbasali185/'><FontAwesomeIcon className='px-2 fs-1 instagram' icon={faInstagram}></FontAwesomeIcon></a>
                        <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/mdabbasali185/'><FontAwesomeIcon className='px-2 fs-1 linkedin' icon={faLinkedin}></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;




