import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        
        <nav>
            <div>
                <Link to="/"><img
                src="https://i.imgur.com/C1jcTRl.png"
                  alt="Rotten Potatoes Logo" 
  style={{ width: "300px", height: "300px" }} 

                /></Link>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/for-you">For You</Link></li>
                    <li><Link to="/">Watchlist</Link></li>
                    <li><Link to="/">About Us (we’re broke)</Link></li>
                </ul>
            </div>
        </nav>


        
    )
}
export default Navigation