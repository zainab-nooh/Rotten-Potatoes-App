import { Link } from "react-router-dom";
import '../styles/Navigation.css'
const Navigation = () => {
    return (
        
        <nav>
            <div>
                <Link to="/"><img
                src="https://i.imgur.com/C1jcTRl.png"
                  alt="Rotten Potatoes Logo" 
  style={{ width: "100px", height: "100px" }} 

                /></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/foryou">For You</Link></li>
                    <li><Link to="/watchlist">Watchlist</Link></li>
                    
                </ul>
            </div>
        </nav>


        
    )
}
export default Navigation