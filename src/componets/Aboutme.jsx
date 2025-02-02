import React from 'react'

function Aboutme() {
  return (
    <div>
      <div className="aboutme">
        <h1 style={{textAlign:'center'}}>About <span style={{ color: '#8750f7' }}>Me</span></h1>
        <div className="about_pic_parant">
          <div className="about_pic"><img src={require('../img/IMG_20231024_170937.jpg')} alt="" /></div>
        </div> <br />
        <p>👋 Hi, I'm Rinku Kumar, a passionate React.js Developer with expertise in building dynamic and responsive web applications. I specialize in React.js, JavaScript, HTML, CSS, Bootstrap, and jQuery, along with basic knowledge of Node.js and MongoDB.
          With a strong foundation in MERN stack development, I love crafting seamless user experiences and writing clean, efficient code. I have worked on various projects, including e-commerce platforms, doctor appointment systems.</p>
        {/* <div className='d-flex aline'><br /><h4>Education</h4> <div className='eduLogo'><img src={require('../img/4366867.png')} alt="" /></div> */}
        {/* </div> */}
        <div className="what_i_do">
        <h4>🚀 What I Do:</h4>
        <ul>
          <li>✅Develop modern React.js applications</li>
          <li>✅Build interactive & user-friendly UI/UX</li>
          <li>✅Optimize web performance & responsiveness</li>
          <li>✅Work with APIs & backend integration (Node.js & MongoDB)</li>
        </ul>
        </div>
      </div>

    </div>
  )
}

export default Aboutme