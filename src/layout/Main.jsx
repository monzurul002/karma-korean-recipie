import { Outlet } from "react-router-dom";
import NavigationBar from "../shared/NavigationBar";
import Footer from "../shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../pages/Loader/Loader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;