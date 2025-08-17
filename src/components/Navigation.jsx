import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        
        <nav>
            <div>
                <Link to="/">Rotten Potatoes 🍟</Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">For You</Link></li>
                    <li><Link to="/">Watchlist</Link></li>
                </ul>
            </div>
        </nav>


        
    )
}
export default Navigation