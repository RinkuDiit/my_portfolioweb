import React, { useEffect } from 'react'
import AOS from 'aos';

function Education() {

    useEffect(() => {
          AOS.init({
            duration: 1000,
            once: false, 
          });
        }, []);
  return (
    <div>
      <section id='education'>
        <div className="edu_section1">
            <h1 style={{textAlign:'center'}}>My <span style={{ color: '#8750f7' }}>Education</span></h1>
            <div className="line"></div>
            <div className="edu_div" data-aos='fade-right'>
              <h3>2023-2024 </h3>
              <h2>MERN Stack Developer Course</h2>
              <h6>Diit Educom Alwar (Raj.)</h6>
            </div>
             <div className="edu_div" data-aos='fade-left' >
              <h3>1020-2023 </h3>
              <h2>B.com Graduation</h2>
              <h6>Govt. Commerce College Alwar (Raj.)</h6>
            </div>
            <div className="edu_div" data-aos='fade-right'>
              <h3>1019-2020 </h3>
              <h2>12th Commerce</h2>
              <h6>Govt. Sr. Sec School Govindgarh Alwar (Raj.)</h6>
            </div>

        </div>
        </section>
    </div>
  )
}

export default Education