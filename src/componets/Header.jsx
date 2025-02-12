import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {


  const [headercolor, setHeadercolor] = useState('#ff000000')
  const [display, setdisplay]  = useState('none')



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeadercolor('#00040a');
      } else {
        setHeadercolor('#ff000000');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const displays = () =>{
    if(display == 'none'){
      setdisplay('block') 
    }
    else if(display == 'block'){
      setdisplay('none') 
    }
  }
 
  
    const scrollwindow = (data)=>{
      if (data == 'home') {
        window.scrollTo(0,0)
      }
      else if(data == 'about'){
        window.scrollTo(0,620)
      }
      else if(data == 'education'){
        window.scrollTo(0,1156)
      }
      else if(data == 'skills'){
        window.scrollTo(0,1721)
      }
      else if(data == 'projects'){
        window.scrollTo(0,2320)
      }
      else if(data == 'contact'){
        window.scrollTo(0,3895)
      }
    }
 







  return (
    <div>
      <div className="header_logo" style={{ backgroundColor: headercolor }}>
      
        <div className="logo">
          <img src={require('../img/Screenshot_2025-01-31_070119-removebg-preview.png')} />
        </div>
        <div className="header_menu">
          <ul>
            <Link to="/"></Link><li onClick={()=>scrollwindow('home')}><>HOME</></li>
            <li onClick={()=>scrollwindow('about')}><>ABOUT</></li>
            <li onClick={()=>scrollwindow('education')}><>EDUCATION</></li>
            <li onClick={()=>scrollwindow('skills')}>SKILLS</li>
            <li onClick={()=>scrollwindow('projects')}>PROJECTS</li>
            <li onClick={()=>scrollwindow('contact')}><>CONTACT</></li>

          </ul>
        </div>
        <div className="nav_icon" >
          <i class="fa fa-bars" onClick={displays} aria-hidden="true"></i>
          
        </div>
        <div className="dropdown_manu" style={{display:display}}>
        <ul>
        <img src={require('../../src/img/Screenshot_2025-01-31_070119-removebg-preview.png')} width={100} />

            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li></li>
            <li>Projects</li>
        </ul> <br /><br />
        
        <a href="tel:+919983552078"><p>Mob: +91 9983552078</p></a>
        <a href="mailto:rr1341570@gmail.com"><p>E-mail: rr1341570@gmail.com</p></a>

        
        </div>

       

      </div>
      </div>
  )
}

export default Header