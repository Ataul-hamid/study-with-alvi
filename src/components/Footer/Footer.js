import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-secondary text-white mt-5 p-5">
            <Row>
                <Col>
                    <br />
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
                    <h1 className="text-white">Subscribe</h1>
                    <input placeholder="Enter your email" type="text" name="" id="" />
                    <button className="bg-success text-light">Subscribe</button>
                </Col>

            </Row>
            <p className="text-white mt-5">Made By: Ataul Hamid Alvi</p>
        </div>
    );
};

export default Footer;