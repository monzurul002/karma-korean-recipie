import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginBg from "../../assets/loginBg.png"
import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState(null);
    const { googleSignIn, emailPasswordSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.from?.pathname;
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate(redirectPath || '/', { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        emailPasswordSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location.state?.from?.pathname || '/', { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })

    }


    return (
        <Container className="container py-5">
            <Row>

                <Col className="col-md-6 col-12 ">
                    <img className="w-100 h-100" src={loginBg} alt="" />
                </Col>
                <Col className="col-md-6 border-right mt-5   ">
                    <Form onSubmit={handleLogin}>
                        <h3 className="text-center text-info">Login</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-around" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                            <p className="text-danger">Do not have an Account? <Link to='/register'>Create new Account</Link> </p>
                        </Form.Group>
                        <Form.Text className="text-muted">
                            {error}
                        </Form.Text>
                        <Button className="w-100" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <h5 className="py-3 text-danger font-bold border-bottom text-center">Or</h5>
                    <div className='border bg-info mt-3 text-center w-75  mx-auto p-2 rounded-2'>
                        <AiFillGithub />

                        <small className='fw-bold text-white'> Continune with GitHub</small>

                    </div>
                    <div onClick={handelGoogleSignIn} className='border bg-info mt-3 text-center justify-content-around w-75 mx-auto p-2 rounded-4'>
                        <FcGoogle />

                        <small className='fw-bold'> Continune with Google</small>

                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Login;