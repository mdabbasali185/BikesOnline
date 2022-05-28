import React from 'react';
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

                   
                </div>
            </div>
        </div>
    );
};

export default Profile;