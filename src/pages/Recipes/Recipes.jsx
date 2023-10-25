/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { BiFoodTag, BiSolidHandRight } from "react-icons/bi";

const Recipes = ({ recipe }) => {
    // eslint-disable-next-line react/prop-types
    const { recipe_name, ingredients, cooking_method, rating } = recipe;
    return (
        <div>
            <Card border="primary" >
                <Card.Header>
                    <Card.Title className="text-primary">{recipe_name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-secondary "><span className="fw-bold   fs-5">Cooking Method:</span> <br />
                        <BiSolidHandRight className="text-info fs-4" />   {cooking_method} </Card.Text>
                    <Card.Text>
                        <span className=" text-danger fw-bold fs-5">Ingredients:</span>
                        {
                            ingredients.map(ingredient => {
                                return <ul className="lh-1"
                                    key={ingredient.id}
                                >
                                    <span className="text-secondary"><BiFoodTag className="text-success" /> {ingredient}</span>
                                </ul>
                            })
                        }

                    </Card.Text>
                    <Card.Text> {rating} </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipes;