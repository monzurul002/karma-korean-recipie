import { useLoaderData } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";
import { CardGroup, Col, Container, Row } from "react-bootstrap";

const Chef = () => {
    const chefs = useLoaderData()
    return (
        <Container>
            <CardGroup>

                {
                    chefs.map(chef => {
                        return (

                            <ChefCard

                                key={chef.id} chef={chef}  ></ChefCard>
                        )
                    })
                }
            </CardGroup>


        </Container>
    );
};

export default Chef;