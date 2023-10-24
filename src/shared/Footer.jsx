import { Col, Row } from "react-bootstrap";
import logo from "../assets/logo.png"
import { BsClock, BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="px-5 bg-black py-5 text-white">
            <div className="text-center">
                <img style={{ filter: 'brightness(0) invert(1)' }} src={logo} width="220px" alt="" />
            </div>
            <div className="mt-4">
                <Row>
                    <Col>
                        <div>
                            <h4>OUR STORY</h4>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem molestiae nam maxime vero similique earum officiis magnam, sed exercitationem id sint ex quos adipisci.</p>
                            <p> <BsClock className="text-warning me-1" />Mon - Thr 8.00 - 18.00</p>
                            <p> <BsClock className="text-warning me-1" /> Friday Closed</p>
                        </div>
                    </Col>

                    <Col className="ms-5">
                        <h4>FOLLOW US</h4>
                        <p> <BsFacebook className="text-primary me-1" />Facebook</p>
                        <p> <FaXTwitter className="text-white me-1" /> Twitter</p>
                        <p> <FaInstagram className="text-danger me-1" /> Instagram</p>
                    </Col>
                    <Col>
                        <div>
                            <h4>USEFULL LINKS</h4>
                            <p>About</p>
                            <p>Terms & Conditions</p>
                            <p >Korean Pantry Essentials
                                Banchan Cookbook </p>
                            <p>  Korean BBQ at Home</p>
                            <p>Korean Drama Food</p>
                            <p>  Shop</p>

                        </div></Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;