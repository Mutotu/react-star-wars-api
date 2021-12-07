import { Link } from "react-router-dom";

const Links = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/ships/'>Ships</Link>
          <li>
            <Link to='/ships/:id'></Link>
          </li>
          <li>
            <Link to='/ships/myships'>My Ships</Link>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Links;
