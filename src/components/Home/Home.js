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


        <div  >


            <Row className="bg-light ">
                <Col>
                    <br />
                    <h1 className="text-center text-success mt-5">Free Programing <br />Courses Tutorial</h1>
                    <p className="text-center ms-3 text-warning">With over 12 Courses in 10 Subjects, You're guaranteed to find something that's right for you</p>
                    <Button className="mt-3">VIEW OUR COURSES</Button>
                </Col>
                <Col> <img src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2018/12/img-slider-03.png" alt="" /></Col>

            </Row>
            <div className="banner">
                <h1 className="text-warning">What do you want to learn today</h1>
            </div>
            <br />


            {

                <Row xs={1} md={2} className="g-5 ms-5 px-5 py-5">
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
            <br />
            <Row>
                <Col>
                    <img src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2018/10/bg-22-1.jpg" alt="" />
                </Col>
                <Col>
                    <p className="mt-5 bg-secondary p-5 m-5">
                        I really appreciate the awesome job this team does! In friendly tone and highly professional skills they accomplish to solve any problem I face in order to customise my site. I feel I have a great team by my side. Thank you team. Thank you Huyen Anh! Keep up the excellant work. You can rely to them. The theme is the best and with their help my company's first impression to my clients is the best. <br /> <br />
                        <h5 className="text-white">Ataul Hamid Alvi</h5>
                        <p className="text-white">Founder: Study With Alvi</p>
                    </p>

                </Col>
            </Row>
            <div class="content-text bg-warning m-5 p-5 mt-5 mb-5 rounded">

                <Row>
                    <Col>
                        <h3 class="title" style={{ fontSize: '22px' }}>
                            Start mastering your courses! Try now for free </h3>

                    </Col>
                    <Col>
                        {/* <a class="btn-get-started" href="#" title="GET STARTED">
                            GET STARTED </a>
                        <a class="btn-sign-up" href="#" title="SIGN UP">
                            SIGN UP </a> */}
                        <Button className="bg-light text-black">GET STARTED</Button> &nbsp;
                        <Button>SIGN UP</Button>
                    </Col>
                </Row>

            </div>



        </div>

    );
};

export default Home;