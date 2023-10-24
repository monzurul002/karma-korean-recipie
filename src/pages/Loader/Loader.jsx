import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="d-flex vh-100 align-items-center bg-dark justify-content-center">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default Loader;