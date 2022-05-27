import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import delevary from '../../Images/delevary.png'
import support from '../../Images/customer-service.png'
import payment from '../../Images/debit-card.png'
import returnMoney from '../../Images/return-on-investment.png'
import './Business.css'

const Business = () => {
    return (
        <div className='bg-dark'>
            <div>
            <div className='text-center'>
                <h2 className='text-info'>OUR LOYALTY</h2>
                <h4 className='text-white'>WE ARE TRY TO UNDERSTAND USER EXPECTATION</h4>
            </div>
            <CardGroup>
                <Card>
                    <Card.Img  variant="top" src={delevary} />
                    <Card.Body>
                        <Card.Title className='text-info fw-bold' >Free delivery</Card.Title>
                        <Card.Text className='fw-bold'>
                            Worldwide from 100$
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img className='p-5' variant="top" src={payment} />
                    <Card.Body>
                        <Card.Title className='text-info fw-bold' >Payment method</Card.Title>
                        <Card.Text className='fw-bold'>
                            Worldwide from any online bank
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img className='p-5'  variant="top" src={support} />
                    <Card.Body>
                        <Card.Title className='text-info fw-bold' >Support 24/7</Card.Title>
                        <Card.Text className='fw-bold'>
                            All country use this feature
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img className='p-5'  variant="top" src={returnMoney} />
                    <Card.Body>
                        <Card.Title className='text-info fw-bold' >Easy return</Card.Title>
                        <Card.Text className='fw-bold'>
                            All country available
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
        </div>
    );
};

export default Business;