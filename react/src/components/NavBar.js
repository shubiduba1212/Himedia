import {Link} from 'react-router-dom';

function NavBar(){
  return(
    <>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;