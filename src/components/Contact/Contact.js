import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <br />
                <br />
                <br />
                <br />

                <h1>Contact Us</h1>
                <br />
                <br />
                <br />
                <br />

                <Row>
                    <Col>
                        <h5>Our Location</h5>
                        <p>Address: Chittagong</p>
                        <p>Bangladesh</p>

                    </Col>
                    <Col>
                        <h5>Contact Us</h5>
                        <p>phone: 82347239847</p>
                        <p>Email: someone@gmail.com</p>
                    </Col>
                    <Col>
                        <h5>WRITE SOME WORDS</h5>
                        <p>Support24/7@domain.com</p>
                        <p>Info@domain.com</p>
                    </Col>
                </Row>

            </div>
            <br />


        </div>
    );
};

export default Contact;