import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQox7GTSIn2OQkYsfh9Skk7aLz3Qt70Di0PgYByCOIkV9wUdXVQ8cfgQg09HSoQDyWqfmA&usqp=CAU" alt="logo" className='logo' />
      {
        auth ? <ul className="nav-ul" >
          <li> <Link to="/">Products</Link></li>
          <li> <Link to="/add">Add Product </Link></li>
          <li> <Link to="/profile">Profile</Link> </li>
          <li> <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link> </li>
        </ul>
          :
          <ul className='nav-ul nav-right'>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link> </li>
          </ul>
      }
    </div>
  )
}


export default Nav;