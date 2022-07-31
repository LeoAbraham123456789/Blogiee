import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
    return ( 
        <div>
            <h1>Sorryy, not able to find the page</h1>
            <Link to="/">
                Return to home page
            </Link>
        </div>
     );
}
 
export default Notfound;