
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginBg from "../../assets/login.jpg"
import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const [error, setError] = useState(null);
    const { googleSignIn, createUserWithEmailPassword, userProfileUpdate, logOut, signInWithGitHub } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        setError(null)
        if (password.length === 0) {
            setError(null)
            return setError("Password cant be empty.")
        }
        else if (!/(?=.*[A-Z])(?=.*[!@#$&*])/.test(password)) {
            return setError("Password should have one uppercase and one special character.")
        }

        console.log(name, email, photo, password);
    }



    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/")
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div>
            <Container className="container pb-5">
                <Row>


                    <Col className="col-md-6 border-right mt-5 border p-4   ">
                        <Form onSubmit={handleCreateUser}>
                            <h3 className="text-center text-success ">Register</h3>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhoto">
                                <Form.Label>Past PhotoURL</Form.Label>
                                <Form.Control type="text" name="photo" placeholder="Enter PhotoURL" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                            <Button className="w-100" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        {/* <h5 className="py-3 text-danger font-bold border-bottom text-center">Or</h5> */}


                    </Col>
                    <Col style={{ backgroundImage: `url(${loginBg})`, backgroundSize: "cover" }} className="col-md-6 mt-5 d-flex  align-items-center justity-content-center "  >
                        <div className="w-100">
                            <div className='border bg-info mt-5 text-center w-100  mx-auto p-2 rounded-2'>
                                <AiFillGithub />

                                <small className='fw-bold text-white'> Continune with GitHub</small>

                            </div>
                            <div onClick={handelGoogleSignIn} className='border bg-info mt-3 text-center justify-content-around w-100 mx-auto p-2 rounded-4'>
                                <FcGoogle />

                                <small className='fw-bold'> Continune with Google</small>

                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;