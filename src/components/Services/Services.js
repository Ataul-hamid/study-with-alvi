import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'


const Services = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {

        fetch("./data.JSON")
            .then(res => res.json())
            .then(data => setLanguages(data));

    }, [])

    return (
        <div className="services">

            <h1 className="text-white text-success bg-warning">Our Services</h1>
            <p>Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            <br />


            {

                <div className="shadow-sm p-3 mb-5 bg-white rounded">
                    <Row className="services " xs={1} md={2} lg={3} className="g-4">
                        {
                            languages.map(language => <ServiceDetails language={language}></ServiceDetails>)
                        }

                    </Row>
                </div>
            }
            <br />
            <br />


            <p className="text-primary">ALl Study With ALvi, ALL The Time</p>
            <h3 className="text-secondary">Live the experience</h3>
            <br />
            <br />

            <div className="profile">
                <Row>
                    <Col>
                        <img className="rounded-circle mb-5" src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2018/10/Untitled-2-426x426.jpg" alt="" />
                    </Col>
                    <Col>

                        <h2 className="text-warning mt-5 ">Learn at your own pace</h2>
                        <p className="text-success me-5">Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Services;