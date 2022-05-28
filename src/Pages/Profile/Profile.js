import React from 'react';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Profile.css'
import myPic from '../../Images/userReview.png'

const Profile = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="left">
                    <img className='img-fluid' src={myPic} alt="user" />
                    <h4>Md Abbas Ali</h4>
                    <p>Web Developer</p>
                </div>
                <div className="right">
                    <div className="info">
                        <h3>Information</h3>
                        <div className="info_data">
                            <div className="data">
                                <h4>Email</h4>
                                <p>mdabbasali185@gmail.com</p>
                            </div>
                            <div className="data">
                                <h4>Phone</h4>
                                <p>01962844395</p>
                            </div>
                        </div>
                    </div>

                    <div className="projects">
                        <h3>Projects</h3>
                        <div className="projects_data">
                            <div className="data">
                                <h4>Recent</h4>

                            </div>
                            <div className="data">
                                <h4>Most Viewed</h4>

                            </div>
                        </div>
                    </div>

                    <div className="social_media">
                        <div className='d-flex mb-3'>
                            <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='https://www.facebook.com/mdabbasali185'><FontAwesomeIcon className='px-2 fs-1 fb' icon={faFacebook}></FontAwesomeIcon></a>
                            <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='https://github.com/mdabbasali185'><FontAwesomeIcon className='px-2 fs-1 github' icon={faGithub}></FontAwesomeIcon></a>
                            <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='mailto:mdabbasali185@gmail.com'><FontAwesomeIcon className='px-2 fs-1 google' icon={faGoogle}></FontAwesomeIcon></a>
                            <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='https://www.instagram.com/mdabbasali185/'><FontAwesomeIcon className='px-2 fs-1 instagram' icon={faInstagram}></FontAwesomeIcon></a>
                            <a className='text-decoration-none text-dark' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/mdabbasali185/'><FontAwesomeIcon className='px-2 fs-1 linkedin' icon={faLinkedin}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;