import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png"
import { BsFillBrightnessHighFill, BsFillMoonFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    const theme = document.getElementById('themeToggle')
    const darkMode = () => {

        theme.setAttribute('data-bs-theme', "dark")
    }
    const lightMode = () => {
        theme.setAttribute('data-bs-theme', "light")
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-primary-subtle">
                <Container>
                    <Navbar.Brand as={Link} href="/">
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


                            <Link to="/" className="btn" >Home</Link>


                            <Link className="btn" to="/blogs">Blogs</Link>
                            {
                                !user ? <Link className="btn btn-success" to="/login">Login</Link> :
                                    <img title={user?.displayName} className="rounded-pill" width="40px" src={user?.photoURL} alt="display-image" />
                            }

                            <div onClick={darkMode}>
                                < BsFillMoonFill />
                            </div>
                            <div onClick={lightMode}>
                                <BsFillBrightnessHighFill />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;