import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-warning">
            <Row>
                <Col>
                    <br />
                    <br />
                Study With Alvi</Col>
                <Col>
                    <p>Home</p>
                    <p>About</p>
                    <p>Account</p>
                    <p>All teacher</p>

                </Col>
                <Col>
                    <p>Blog</p>
                    <p>Contact Us</p>
                    <p>Courses</p>
                    <p>Events</p>
                </Col>
                <Col>
                    <p>Membership</p>
                    <p>Page 404</p>
                    <p>Profile</p>
                    <p>Programs</p>


                </Col>
                <Col>
                    <h1>Subscribe</h1>
                    <input placeholder="Enter your email" type="text" name="" id="" />
                    <button className="bg-danger text-light">Subscribe</button>
                </Col>

            </Row>
        </div>
    );
};

export default Footer;