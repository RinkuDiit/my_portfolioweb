import React, { useEffect } from 'react'

function Home() {
  
  
   const  downloadcv = () => {
      alert("downloaded")
    }
 
 
  

  

  return (
    <div>
      <div className="my_info">
        <div className="i_am">
          <h2 className='fw-bold '>I am Rinku Kumar</h2>
          <h1 className='fw-bold i_am_h1_color'>Next-Level Web <br />  Developer.</h1>
          <h6>React.js Front-End Developer. Proficient in HTML, CSS, JavaScript, and React.js, with hands-on experience through academic projects and personal practice. Eager to contribute to dynamic teams, build intuitive user interfaces.</h6>
          <br />
          <div>
            <a href="file:///D:/RINKU_KUMAR_cv2.pdf" download="myfile.pdf">
            <button type='button' className='mycv my_buttons'>Download CV <i class="fa fa-cloud-download" aria-hidden="true"></i> </button></a>
            <button className='my_buttons my_linkdin'><i class="fa fa-linkedin" aria-hidden="true"></i></button>
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