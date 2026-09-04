import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/user/jaswanth">User</Link></li>
        <li><Link to="/Dashboard/innerpages">Dashboard</Link></li>
        <li><Link to="/context-api">Context API</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;