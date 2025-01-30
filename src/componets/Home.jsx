import React, { useEffect } from 'react'

function Home() {









  return (
    <div>
      <div className="my_info">
        <div className="i_am">
          <h2 className='fw-bold '>I am Rinku Kumar</h2>
          <h1 className='fw-bold i_am_h1_color'>Next-Level Web <br />  Developer.</h1>
          <h6>React.js Front-End Developer. Proficient in HTML, CSS, JavaScript, and React.js, with hands-on experience through academic projects and personal practice. Eager to contribute to dynamic teams, build intuitive user interfaces.</h6>
          <br />
          <div>
            <a href="https://drive.google.com/file/d/150bblH7mCUo_zZAG9ctkkJsoxoUqhwEz/view?usp=drive_link" download="myresume.pdf">
              <button type='button' className='mycv my_buttons'>Download CV <i class="fa fa-cloud-download" aria-hidden="true"></i> </button></a>
            <a href="https://www.linkedin.com/in/rinku-kumar-b803ba2b8/"><button className='my_buttons my_linkdin'><i class="fa fa-linkedin" aria-hidden="true"></i></button></a>
            <button className='my_buttons my_linkdin'><i class="fa fa-github" aria-hidden="true"></i></button>


          </div>
        </div>
        <div className="my_img">
          <div className="imgOfRinku">
            <img src={require('../img/rinku_pic.jpg')} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home