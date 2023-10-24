import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png"
import { BsFillBrightnessHighFill, BsFillMoonFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} width={"150"} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Form className="d-md-flex d-none">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 w-100"
                            aria-label="Search"
                        />
                        <Button variant="outline-success"><BsSearch /></Button>
                    </Form>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            {
                                !user ? <Link className="btn btn-success" to="/login">Login</Link> :
                                    <Button className="btn btn-danger">Logout</Button>
                            }

                            <Nav.Link href="#deets">
                                < BsFillMoonFill />
                            </Nav.Link>
                            <Nav.Link href="#memes">
                                <BsFillBrightnessHighFill />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;