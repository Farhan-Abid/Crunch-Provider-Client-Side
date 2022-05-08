import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className='body'>
            <Container>
                <Row className='mb-5 mt-3'>
                    <Col lg='8'>
                        <h1 className='display-4 mb-4 text-center'>
                            Contact Me
                        </h1>
                    </Col>
                </Row>

                <Row className='sec_sp'>
                    <Col lg='5' className='mb-5'>
                        <h3 className='color_sec py-4'>
                            Get in Touch
                        </h3>
                        <address>
                            <strong>Email: Shahabid628@gmail.com</strong>
                            <br />
                            <br />
                            <p>
                                <strong>Phone: ++880123434545</strong>
                            </p>
                        </address>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis, porro saepe ducimus, provident animi natus, excepturi eum obcaecati omnis placeat molestiae amet eos commodi assumenda quidem sequi error velit?</p>
                    </Col>
                    <Col lg='7' className='d-flex align-items-center'>
                        <form className='contact__form w-100'>
                            <Row>
                                <Col lg='6' className='form-group'>
                                    <input className='form-control' id='name' name='name' placeholder='Name' type='text'>
                                    </input>
                                </Col>
                                <Col lg='6' className='form-group'>
                                    <input className='form-control rounded-0' id='email' name='email' placeholder='Email' type='email'>
                                    </input>
                                </Col>
                            </Row>
                            <textarea className='form-control rounded-0' id='message' name='message' placeholder='message' rows='5'>

                            </textarea>
                            <br />
                            <Row>
                                <Col lg='12' className='form-group'>
                                    <button className='btn ac_btn' type='submit'>Send</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ContactForm;