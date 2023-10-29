/* eslint-disable react/prop-types */
import { Rating } from 'react-simple-star-rating'
import { Button, Card, Col } from "react-bootstrap";
import { BiFoodTag, BiSolidHandRight, } from "react-icons/bi";
import { FaRegStar, FaStar } from 'react-icons/fa';
import { BsFillStarFill } from "react-icons/bs";
import { useState } from 'react';
import { toast } from 'react-toastify';
const Recipes = ({ recipe }) => {
    const [added, setAdded] = useState(false)
    const hanldeAddToFavourite = () => {
        setAdded(!added)
        toast("Recipe added to favorite.")
    }
    // eslint-disable-next-line react/prop-types
    const { recipe_name, ingredients, cooking_method, rating } = recipe;
    return (
        <Col style={{ height: "15em" }} className='p-2  '>
            <Card border="primary bg-light p-2 " >
                <Card.Header>
                    <Card.Title className="text-primary">{recipe_name}</Card.Title>
                </Card.Header>

                <p className="text-secondary "><span className="fw-bold   fs-5">Cooking Method:</span> <br />
                    <BiSolidHandRight className="text-info fs-4" />   {cooking_method} </p>
                <Card.Text className='d-flex'>
                    <div>
                        <span className=" text-danger fw-bold fs-5">Ingredients:</span>
                        {
                            ingredients.map(ingredient => {
                                return <ul className="lh-1 "
                                    key={ingredient.id}
                                >
                                    <span className="text-secondary "><BiFoodTag className="text-success" /> {ingredient}</span>
                                </ul>
                            })
                        }
                        <small className="fs-5">  <Rating

                            placeholderRating={Math.round(rating)}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            readonly
                            fullSymbol={<BsFillStarFill />}
                        /><span className='text-warning fw-bold ms-1 mt-2 '>{rating}</span></small>
                    </div>

                </Card.Text>

                <Button onClick={hanldeAddToFavourite} className='btn btn-warning' disabled={added}>Add to favourite</Button>

            </Card>
        </Col>
    );
};

export default Recipes;