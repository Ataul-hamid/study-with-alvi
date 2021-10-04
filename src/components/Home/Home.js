import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import HomeDetail from '../HomeDetail/HomeDetail';
import './Home.css'

const Home = () => {
    const [Languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch("./home.JSON")
            .then(res => res.json())
            .then(data => setLanguages(data))

    }, [])


    return (


        <div >


            <Row className="bg-light banner">
                <Col>
                    <br />
                    <h1 className="text-center text-success mt-5">Free Programing <br />Courses Tutorial</h1>
                    <p className="text-center ms-3 text-warning">With over 12 Courses in 10 Subjects, You're guaranteed to find something that's right for you</p>
                    <Button className="mt-3">VIEW OUR COURSES</Button>
                </Col>
                <Col> <img src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2018/12/img-slider-03.png" alt="" /></Col>

            </Row>
            <div>
                <h1 className="text-warning">What do you want to learn today</h1>
            </div>
            <br />


            {

                <Row xs={1} md={2} className="g-4">
                    {
                        Languages.map(language => <HomeDetail language={language}></HomeDetail>)
                    }

                </Row>
            }
            <br />
            <br />
            <br />
            <br />

            <Row>

                <Col>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />


                    <h1 className="text-center text-warning">Limitless learning, more <br /> possibilities</h1>
                    <br />
                    <p className="text-success ms-5" >High is a nationally recognized K-12 independent school situatedin the hills of  Oakland, California. Our mission is to inspire a  maplifelonglove of learning with a focus on scholarship. For 23 years of existence,Ed hasmore.</p>
                    <Button>Learn More</Button>
                </Col>

                <Col>
                    <img src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2018/10/bg-18.jpg" alt="" />
                </Col>
            </Row>

        </div>

    );
};

export default Home;