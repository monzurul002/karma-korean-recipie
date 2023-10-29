import { Button, Col, Row } from "react-bootstrap";
import caption from "../../assets/caption.jpg"

const RecipieDetails = () => {
    return (
        <div style={{ backgroundColor: "yellow" }} className="container">
            <Row>
                <Col>
                    <img className="p-3" src={caption} alt="" />
                </Col>
                <Col className="d-flex  align-items-center">
                    <div className="text-dark ">
                        <div>
                            <h3>Find The World's Best Recipe</h3>
                            <p>Karma Korean is a world-best chef's place. Where you can get all recipes you want. Just you have to find out.</p>
                            <button className="btn bg-secondary text-white">Explore Now</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RecipieDetails;