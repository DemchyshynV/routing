import {Link, useNavigate} from "react-router-dom";
import {Button} from "../Button/Button";

const User = ({user}) => {
    const navigate = useNavigate();
    const {id, name, username} = user;
    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>username: {username}</div>
            </div>
            {/*<button onClick={()=>navigate(`${id}`, {state:user, replace:true})}>Details</button>*/}
            {/*<Link to={`${id}`} state={user}>*/}
            {/*    <button>Details</button>*/}
            {/*</Link>*/}
            <Button to={`${id}`} state={user}>UserDetails</Button>
        </div>
    );
};

export {User};
