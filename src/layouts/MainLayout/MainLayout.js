import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "../../components";

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>

            <Header/>
            <hr/>
            <button onClick={()=>navigate(-2)}>Prev</button>
            <button onClick={()=>navigate(2)}>Next</button>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
