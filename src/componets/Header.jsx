import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollTracker from './ScrollTracker'


function Header() {


  const [headercolor, setHeadercolor] = useState('#ff000000')
  const [displayleft, setdisplayleft] = useState('-100%')



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeadercolor('#00040a');
      } else {
        setHeadercolor('#ff000000');
      }
      setdisplayleft('-100%')

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const displays = () => {
    if (displayleft == '-100%') {
      setdisplayleft('0px')
    }
    else if (displayleft == '0px') {
      setdisplayleft('-100%')
    }
  }

  const scrollwindow = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };






  return (
    <div>
      <div className="header_logo" style={{ backgroundColor: headercolor }}>

        <div className="logo">
          <img src={require('../img/Screenshot_2025-01-31_070119-removebg-preview.png')} />
        </div>
        <div className="header_menu">
          <ul>
            <Link to="/"></Link><li onClick={() => scrollwindow('home')}><>HOME</></li>
            <li onClick={() => scrollwindow('about')}><>ABOUT</></li>
            <li onClick={() => scrollwindow('education')}><>EDUCATION</></li>
            <li onClick={() => scrollwindow('skills')}>SKILLS</li>
            <li onClick={() => scrollwindow('projects')}>PROJECTS</li>
            <li onClick={() => scrollwindow('contact')}><>CONTACT</></li>

          </ul>
        </div>
        <div className="nav_icon" >
          <i class="fa fa-bars" onClick={displays} aria-hidden="true"></i>

        </div>
        <div className="dropdown_manu" style={{ left: displayleft , transition:'0.7s'}}>
          <ul>
            <img src={require('../../src/img/Screenshot_2025-01-31_070119-removebg-preview.png')} width={100} />

            <Link to="/"></Link><li onClick={() => scrollwindow('home')}><>HOME</></li>
            <li onClick={() => scrollwindow('about')}><>ABOUT</></li>
            <li onClick={() => scrollwindow('education')}><>EDUCATION</></li>
            <li onClick={() => scrollwindow('skills')}>SKILLS</li>
            <li onClick={() => scrollwindow('projects')}>PROJECTS</li>
            <li onClick={() => scrollwindow('contact')}><>CONTACT</></li>
          </ul> <br /><br />

          <a href="tel:+919983552078"><p>Mob: +91 9983552078</p></a>
          <a href="mailto:rr1341570@gmail.com"><p>E-mail: rr1341570@gmail.com</p></a>


        </div>



      </div>
      {/* <div onClick={()=>scrollwindow('home')} style={{ backgroundImage: `conic-gradient(#8750f7 88%,rgba(0, 0, 255, 0.247) 12%)` }} className="scroll_0">
     <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
     </div> */}
     <ScrollTracker />
    </div>
  )
}

export default Header