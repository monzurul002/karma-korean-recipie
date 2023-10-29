import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { AiOutlineLike } from "react-icons/ai";
import { FcClock } from "react-icons/fc";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Recipes from "../Recipes/Recipes";
import bg from "../../assets/carousel/blacgBg.jpg"


const Chef_Recipes = () => {
    const [chefInfo, setChefInfo] = useState({});
    const [recipes, setRecipes] = useState([])

    const { chef_Name, img, number_recipes, years_Experience, likes_number, description } = chefInfo;
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://karma-korean-reciepies-server-11bngfj6s-monzurul002.vercel.app/chef/${id}`)
            .then(res => res.json())
            .then(data => setChefInfo(data))
    }, [])


    useEffect(() => {
        fetch(`https://karma-korean-reciepies-server-11bngfj6s-monzurul002.vercel.app/recipes/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])


    return (
        <div className="p-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
            <div className="text-center fw-bold py-3 mb-2 bg-info ">
                <h2>ALL INFO ABOUT OUR CHEF</h2>
                <Link className="btn btn-warning" to="/">Go Back</Link>
            </div>
            <Row>
                <Col className="col-md-5 px-3" >
                    <Card >

                        <Card.Img className="w-100 " height="350" variant="top" src={img} />

                        <Card.Body>
                            <Card.Title>{chef_Name}</Card.Title>
                            <div className="d-flex flex-column flex-md-row">
                                <div className="d-flex  align-items-center justify-content-center mx-1 bg-light flex-column">
                                    <AiOutlineLike className="text-danger  fw-bold fs-2" />
                                    <div className="ms-2">
                                        <p className="fw-bold">Likes</p>
                                        <h6 className="mt-2">{likes_number}</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mx-1 bg-light p-4">
                                    <IoFastFoodOutline className="text-danger  fw-bold fs-2" />
                                    <div className="ms-2">
                                        <p className="fw-bold">Experience</p>
                                        <h6 className="mt-2">{number_recipes} recipes.</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mx-1 bg-light p-4">
                                    <FcClock className="text-danger  fw-bold fs-2" />
                                    <div className="ms-2">
                                        <p className="fw-bold">Experience</p>
                                        <h6 className=" text-center text-secondary ">{years_Experience} years.</h6>
                                    </div>

                                </div>

                            </div>
                            <Card.Text>
                                {description}
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
                <Col className="col-md-7 ">
                    <h4 className="text-center text-warning">Our Expert chef's recipies.</h4>
                    <Row>
                        {
                            recipes.map(recipe => {
                                return <Recipes
                                    key={recipe.id} recipe={recipe}
                                ></Recipes>
                            })
                        }
                    </Row>

                </Col>

            </Row>
        </div>
    );
};

export default Chef_Recipes;