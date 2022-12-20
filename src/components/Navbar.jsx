import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo.svg"
import { AuthContext } from "../context/authContext";

export const Navbar = () => {

  const {currentUser,logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt=""/>
        </div>
        <div className="links">
          <Link className='Link' to="/?cat=art"><h6>ART</h6></Link>
          <Link className='Link' to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className='Link' to="/?cat=food"><h6>FOOD</h6></Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
            ) : ( 
            <Link className='link' to="/login">
              Регистрация
            </Link>
            )}
          <span className="write">
            <Link className="link" to="/write">
              Write 
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar