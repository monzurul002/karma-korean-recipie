import { Card, CardGroup, Col } from "react-bootstrap";

const ChefCard = ({ chef }) => {

    const { chef_Name, img, number_recipes, years_Experience, likes_number } = chef;
    return (
        <Col className="col-md-4 px-3" >

            <Card className="my-3">
                <img height="250px" width="338px" className="" src={img} />
                <Card.Body>
                    <Card.Title>{chef_Name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>


        </Col>
    );
};

export default ChefCard;