import { Link } from "react-router-dom"
export function Header(){
    return (
        <div>
            <ul>
      <li>
        <Link to="/Food">Food</Link>
      </li>
      <li>
        <Link to="/Mountain">Mountain</Link>
      </li>
      <li>
        <Link to="/Beaches">Beaches</Link>
      </li>
      <li>
        <Link to="/Birds">Birds</Link>
      </li>
    </ul>
        </div>
    )
}