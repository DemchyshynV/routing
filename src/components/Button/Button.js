import {Link} from "react-router-dom";

const Button = ({to,state,children, ...arg}) => {
    return (
        <Link to={to} state={state} {...arg}>
            <button>{children}</button>
        </Link>
    );
};

export {Button};
