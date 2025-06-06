import { FC } from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";


const NotFoundPage: FC = () =>{
    return(
        <div className = "not-found">
            <h1>404 — Page not found</h1>
            <p>Sorry, the page you are looking for does not exist..</p>
            <Link to="/">Return to Existing Page</Link>
        </div>
    );
};
export default NotFoundPage;