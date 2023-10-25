import { Card, Col } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { IoFastFoodOutline } from "react-icons/io5";
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ChefCard = ({ chef }) => {

    // eslint-disable-next-line react/prop-types
    const { id, chef_Name, img, number_recipes, years_Experience, likes_number } = chef;

    return (
        <Col className="col-md-4 px-3" >

            <Card className="my-3">
                <img height="250px" width="338px" className="" src={img} />
                <Card.Body>
                    <Card.Title className="text-center fs-5 text-danger fw-bold">{chef_Name}</Card.Title>
                    <div className="d-flex text-secondary fw-bold justify-content-between">
                        <p className="bg-light"> Experience: {years_Experience} years.</p>
                        <p className="bg-light">Likes:<FcLike />{likes_number}</p>
                    </div>
                    <p className="text-secondary bg-light fw-bold justify-content-between ">Numbers of recipes: <IoFastFoodOutline className="text-danger" /> {number_recipes}</p>
                    <Link to={`/recipe/${id}`} className="btn w-100 fw-bold btn-warning">View Recipes</Link>

                </Card.Body>

            </Card>
            <Link to="/"></Link>

        </Col >
    );
};

export default ChefCard;