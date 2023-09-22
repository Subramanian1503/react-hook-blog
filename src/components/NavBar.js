import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      {/* create a unordered list to hold all the naviagtion link */}
      <ul id="nav">
        {/* create list element which points to each component */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
