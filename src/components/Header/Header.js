import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Header.css'

import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navStyle = {
        textDecoration: 'none',
        fontSize: '30px',
        marginRight: '20px',
        BackgroundColor: 'bg-secondary',
        padding: '20px',
        color: 'white'

    }
    return (
        <div >


            <nav className="text-primary text-decoration-none mb-5 header-style">

                <Row>
                    <Col>  <h3 className="text-white mt-2">Study With Alvi</h3></Col>
                    <Col> <NavLink activeStyle={{ fontWeight: "bold", color: "tomato", backgroundColor: "cyan" }} style={navStyle} to="/home"> Home</NavLink>
                        <NavLink activeStyle={{ fontWeight: "bold", color: "tomato", backgroundColor: "cyan" }} style={navStyle} to="/about"> About</NavLink>
                        <NavLink activeStyle={{ fontWeight: "bold", color: "tomato", backgroundColor: "cyan" }} style={navStyle} to="/services"> Services</NavLink>
                        <NavLink activeStyle={{ fontWeight: "bold", color: "red", backgroundColor: "cyan" }} style={navStyle} to="/contact"> Contact</NavLink></Col>
                </Row>
            </nav>

        </div>

    );
};

export default Header;