import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navStyle = {
        textDecoration: 'none',
        fontSize: '30px',
        marginRight: '20px',
        BackgroundColor: 'bg-success',
        padding: '20px',
        color: 'white'

    }
    return (
        <div>


            <nav className="bg-success text-primary text-decoration-none mb-5">

                <Row>
                    <Col>  <h3 className="text-white mt-2">Study With Alvi</h3></Col>
                    <Col> <NavLink style={navStyle} to="/home"> Home</NavLink>
                        <NavLink style={navStyle} to="/about"> About</NavLink>
                        <NavLink style={navStyle} to="/services"> Services</NavLink>
                        <NavLink style={navStyle} to="/contact"> Contact</NavLink></Col>
                </Row>
            </nav>

        </div>

    );
};

export default Header;