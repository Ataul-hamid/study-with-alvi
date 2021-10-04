import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const Services = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {

        fetch("./data.JSON")
            .then(res => res.json())
            .then(data => setLanguages(data));

    }, [])

    return (
        <div>

            <h1 className="text-center text-success"><u>Our Services</u></h1>
            <br />


            {

                <Row xs={1} md={2} className="g-4">
                    {
                        languages.map(language => <ServiceDetails language={language}></ServiceDetails>)
                    }

                </Row>
            }
            <br />
            <br />
        </div>
    );
};

export default Services;