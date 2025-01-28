import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {

  
  const [headercolor, setHeadercolor] = useState('#ff000000')



 useEffect(()=>{
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeadercolor('black');
    } else {
      setHeadercolor('#ff000000');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
 },[]) 
    
  






  return (
    <div>
      <div className="header_logo" style={{ backgroundColor: headercolor }}>
        <div className="logo">
          <img src={require('../img/gold-golden-r-wing-wings-alphabet-letter-logo-icon-with-classy-design-for-company-and-business-vector.jpg')} />
        </div>
        <div className="header_menu">
          <ul>
            <Link to="/"></Link><li><>Home</></li>
            <li><>About</></li>
            <li><>Contect</></li>
            <li>My CV</li>
            <li>Projects</li>

          </ul>
        </div>
        <div className="nav_icon">

        </div>
      </div>
    </div>
  )
}

export default Header