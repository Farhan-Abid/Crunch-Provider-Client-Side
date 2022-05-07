import React, { useRef } from 'react';
import google from "../../../Images/social/google.png";
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
          navigate('/home');
      }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');

    }
    const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate1 = useNavigate();


    return (
        <div>
            <h2>Please login</h2>
            <Form onSubmit={handleSubmit} className='w-50 login container text-info mt-2 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New To Crunch Provider? <Link to='/register' className='text-info mt-5 pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

            <div>
            <button
          className="btn btn-dark w-50 mx-auto d-block my-3"
          onClick={() => signInWithGoogle()}
        >
          <img style={{ height: "30px" }} src={google} alt="" />
          <span className="px-2 ">Google Sign In</span>
        </button>
            </div>
        </div>
    );
};

export default Login;