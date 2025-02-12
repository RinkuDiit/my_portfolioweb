import React, { useEffect } from 'react'
import Aboutme from '../componets/Aboutme'
import Education from './Education'
import Contect from './Contect'
import Skill from './Skill'
import Projects from './Projects'
import AOS from 'aos';




function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation की स्पीड (मिलीसेकंड में)
      once: false, // एक बार चलने के बाद दुबारा ट्रिगर न हो
    });
  }, []);

  


  return (
    <div>
      <div className="my_info"> 
        <div className="i_am">
          <h2 className='fw-bold ' data-aos="fade-up">Hi, I'm Rinku Kumar  </h2>
          <h1 className='fw-bold i_am_h1_color' data-aos="fade-up"> React.js  <br />  Developer.</h1>
          <h6 data-aos="fade-up">Passionate about building interactive UIs.</h6>

          <br />
          <div>
            <a href="https://drive.google.com/file/d/150bblH7mCUo_zZAG9ctkkJsoxoUqhwEz/view?usp=drive_link" download="myresume.pdf">
              <button type='button' className='mycv my_buttons'>Download CV <i class="fa fa-cloud-download" aria-hidden="true"></i> </button></a>
            <a href="https://www.linkedin.com/in/rinku-kumar-b803ba2b8/"><button className='my_buttons my_linkdin'><i class="fa fa-linkedin" aria-hidden="true"></i></button></a>
            <a href="https://github.com/RinkuDiit"><button className='my_buttons my_linkdin'><i class="fa fa-github" aria-hidden="true"></i></button></a>


          </div>
        </div>
        <div className="my_img">
          <div className="imgOfRinku">
            <img src={require('../img/rinku_pic.jpg')} alt="" />
          </div>
        </div>
      </div>
     < Aboutme />
     <Education />
     <Skill/>
     <Projects />
     <Contect />
     <div className="scroll_0">
     <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
     </div>
    </div>
  )
}

export default Home