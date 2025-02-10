import React, { useEffect, useState } from 'react'

function Skill() {
 
    const[count, setcount] = useState(88)
    const[start, setStart] = useState(false)

   
        setTimeout(()=>{
            if ( start && count < 88) {
                setcount( count + 1)
            }
        },10)
    

    const process =() =>{
        setcount(0)
        if (!start) setStart(true);
    }
  
       


    return (
        <div>
            <div className="skillpage">
                <h1 style={{ textAlign: 'center', width: '100%' }}>My <span style={{ color: '#8750f7' }}>Skill</span></h1>
                <div className="skillbar">
                    <div className="skill_png" style={{ backgroundImage:`conic-gradient(#8750f7 ${count}%,rgba(0, 0, 255, 0.247) 12%)`}} onMouseEnter={process}>
                    <img className='skill_img' src={require('../img/react-original-wordmark-icon-840x1024-vhmauxp6.png')} alt="" />
                    <h3>{count}%</h3>
                    
                    </div> 
                    <div className="skill_png" style={{ backgroundImage:`conic-gradient(#8750f7 ${count}%,rgba(0, 0, 255, 0.247) 12%)`}} onMouseEnter={process}>
                    <img className='skill_img' src={require('../img/html.png')} alt="" />
                    <h3>{count}%</h3>
                    
                    </div> 
                    <div className="skill_png" style={{ backgroundImage:`conic-gradient(#8750f7 ${count}%,rgba(0, 0, 255, 0.247) 12%)`}} onMouseEnter={process}>
                    <img className='skill_img' src={require('../img/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-wordmark-programming-langugae-language-pack-logos-icons-1175238.webp')} alt="" />
                    <h3>{count}%</h3>
                    
                    </div> 
                    </div>
                    <div className="skillbar">
                    <div className="skill_png" style={{ backgroundImage:`conic-gradient(#8750f7 ${count}%,rgba(0, 0, 255, 0.247) 12%)`}} onMouseEnter={process}>
                    <img className='skill_img' src={require('../img/javascript.png')} alt="" />
                    <h3>{count}%</h3>
                    
                    </div> 
                    <div className="skill_png" style={{ backgroundImage:`conic-gradient(#8750f7 ${count}%,rgba(0, 0, 255, 0.247) 12%)`}} onMouseEnter={process}>
                    <img className='skill_img' src={require('../img/nodejs.png')} alt="" />
                    <h3>{count}%</h3>
                    
                    </div> 
                    <div className="skill_png" style={{ backgroundImage:`conic-gradient(#8750f7 ${count}%,rgba(0, 0, 255, 0.247) 12%)`}} onMouseEnter={process}>
                    <img className='skill_img' src={require('../img/github.webp')} alt="" />
                    <h3>{count}%</h3>
                    
                    </div> 
                    
                </div>
               
            </div>

        </div>
    )
}

export default Skill