import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            Home
            <Outlet></Outlet>
        </div>
    );
};

export default Main;