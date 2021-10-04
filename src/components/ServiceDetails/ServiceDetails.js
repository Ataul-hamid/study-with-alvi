import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ServiceDetails = (props) => {
    const { img, price, name } = props.language;

    return (
        <Col>
            <Card className="w-50  ms-5  border-secondary rounded-lg">
                <Card.Img className=" h-75 " variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Course Name: {name}</Card.Title>
                    <Card.Text>
                        Price : {price}
                    </Card.Text>
                    <Button>Enroll Courses</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default ServiceDetails;