import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    //About Us //
    return (
        <div className="about">
            <br />
            <br />
            <br />
            <h1 className="text-white">About US</h1>
            <br />
            <br />
            <br />
            <br />


            <Row>
                <Col className="text-white"> <ul><li>History</li>
                    <li>Administration</li>
                    <li>Our Campus</li>
                    <li>Cafeteria</li>
                    <li>Our Teachers</li>
                    <li>Accreditation</li>
                </ul>
                </Col>

                <Col>
                    <p className="text-white">Smart University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference Accepts applications from prospective Note that the tours are booked well in advance and only a certain difference to the community. number of parents can be accommodated on each tour on first come first serve basis. Also it should be noted that the tour does not guarantee that the child will be accepted. Accepts applications from prospective parents Judged throughout the year and those interested are encouraged to contact the school by way of telephone or e-mail by using the contact form to get information difference to the community we serve and that provides.</p>
                </Col>
                <Col>
                    <strong className="text-white">As Principal I wish you a very warm welcome to Our School! We are at the heart of the London community and in 2010 we have succeeded in providing local families an excellent education delivered.
</strong>
                </Col>
            </Row>
            <br />

            <Row>
                <Col>
                    <img width="500px" height="460px" src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2018/10/bg-15.jpg" alt="" />
                </Col>
                <Col>


                    <img width="250px" height="200px" src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2017/12/Untitled-19.jpg" alt="" />
                    <img width="250px" src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2018/10/bg-14.jpg" alt="" />
                    <img width="250px" height="250px" src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2017/12/Untitled-15.jpg" alt="" />
                    <img width="250px" src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/sites/5/2018/10/gallery-2-2.png" alt="" />

                </Col>
            </Row>
            <br />
            <br />
            <br />
            <h1 className="text-center text-white">Our Teacher's</h1>
            <br />
            <br />
            <br />
            <Row>
                <Col>
                    <img width="200px" src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/learn-press-profile/5/2448c53ace919662a2b977d2be3a47c5.jpg" alt="" />
                    <h3>Mr. John</h3>

                </Col>

                <Col>
                    <img width="200px" src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/learn-press-profile/10/de0742507e63b53f7227f3b5151c681c.jpg" alt="" />
                    <h3>Emiliano</h3>


                </Col>

                <Col>
                    <img width="200px" src="https://ivy-school.thimpress.com/demo-3/wp-content/uploads/learn-press-profile/6/a03701ee4ffc9e9d46a3982b43983aa4.jpg" alt="" />
                    <h3>Andy</h3>

                </Col>
            </Row>

        </div>

    );
};

export default About;