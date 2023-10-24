import Slider from "./Carousel/Slider";
import bg from "../../assets/carousel/blacgBg.jpg"
const Home = () => {
    return (
        <div className="py-5 " style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
            <Slider></Slider>
        </div>
    );
};

export default Home;