import Slider from "./Carousel/Slider";
import bg from "../../assets/carousel/blacgBg.jpg"
import Chef from "../Chef/Chef";
import RecipieDetails from "./recipieDetails";
const Home = () => {
    return (
        <div className="py-5 " style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
            <Slider></Slider>
            <Chef></Chef>
            <RecipieDetails></RecipieDetails>
        </div>
    );
};

export default Home;