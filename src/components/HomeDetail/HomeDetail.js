import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const HomeDetail = (props) => {
    const { img, price, name } = props.language;
    return (
        <>

            <Col>
                <Card className="w-50 ms-5">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                            Price:  {price}
                        </Card.Text>
                        <Button>Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default HomeDetail;