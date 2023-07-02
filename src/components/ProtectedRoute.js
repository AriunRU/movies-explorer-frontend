import { Navigate } from "react-router-dom";
import { BlockPage } from "./BlockPage/BlockPage";

export const ProtectedRouteElement = ({ element: Component, ...props }) => {
    return (
        props.loggedIn
        ?<BlockPage loggedIn={props.loggedIn}>
            <Component {...props} /> 
        </BlockPage>
        :<Navigate to="/" replace />
    )
};