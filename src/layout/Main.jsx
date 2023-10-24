import { Outlet } from "react-router-dom";
import NavigationBar from "../shared/NavigationBar";
import Footer from "../shared/Footer";

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;