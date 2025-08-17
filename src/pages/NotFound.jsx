import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h1>404</h1>
        <p>  Oops… looks like this page got <span className="text-red-500">spoiled</span> 🥔  
</p>
<p>Either the link is rotten, or you just typed it wrong.  
        Don’t worry, even critics mess up sometimes.</p>
        <p><link to="/">Take me back before this potato rots
</link></p>
    </div>
  );
}
