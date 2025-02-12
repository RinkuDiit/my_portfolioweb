import React, { useEffect, useState } from 'react'

function Skill() {

    const [countReact, setcountReact] = useState(97)
    const [counthtml, setcounthtml] = useState(96)
    const [countcss, setcountcss] = useState(95)
    const [countjs, setcountjs] = useState(90)
    const [countnode, setcountnode] = useState(88)
    const [countGithub, setcountGithub] = useState(96)




    const [start, setStart] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            if (start && countReact < 97) {
                setcountReact(countReact + 1)
            }
            else if(start && counthtml < 96){
                setcounthtml(counthtml + 1)
            }
            else if(start && countcss < 95){
                setcountcss(countcss + 1)
            }
            else if(start && countjs < 90){
                setcountjs(countjs + 1)
            }
            else if(start && countnode < 88){
                setcountnode(countnode + 1)
            }
            else if(start && countGithub < 96){
                setcountGithub(countGithub + 1)
            }
          
        }, 10)
    })
   


  
    const process = (value) => {
        if (value == 'react') {
            setcountReact(0)
            if (!start) setStart(true);
        }
        
        else if (value == 'html') {
            setcounthtml(0)
            if (!start) setStart(true);
        }

        else if (value == 'css') {
            setcountcss(0)
            if (!start) setStart(true);
        }

        else if (value == 'js') {
            setcountjs(0)
            if (!start) setStart(true);
        }

        else if (value == 'node') {
            setcountnode(0)
            if (!start) setStart(true);
        }

        else if (value == 'github') {
            setcountGithub  (0)
            if (!start) setStart(true);
        }
    }




    return (
        <div>
            <div className="skillpage">
                <h1 style={{ textAlign: 'center', width: '100%' }}>My <span style={{ color: '#8750f7' }}>Skill</span></h1>
                <div className="skillbar">
                    <div className="skill_png" style={{ backgroundImage: `conic-gradient(#8750f7 ${countReact}%,rgba(0, 0, 255, 0.247) 12%)` }} onMouseEnter={()=>process('react')}>
                        <img className='skill_img' src={require('../img/react-original-wordmark-icon-840x1024-vhmauxp6.png')} alt="" />
                        <h3>{countReact}%</h3>

                    </div>
                    <div className="skill_png" style={{ backgroundImage: `conic-gradient(#8750f7 ${counthtml}%,rgba(0, 0, 255, 0.247) 12%)` }} onMouseEnter={()=>process('html')}>
                        <img className='skill_img' src={require('../img/html.png')} alt="" />
                        <h3>{counthtml}%</h3>

                    </div>
                    <div className="skill_png" style={{ backgroundImage: `conic-gradient(#8750f7 ${countcss}%,rgba(0, 0, 255, 0.247) 12%)` }} onMouseEnter={()=>process('css')}>
                        <img className='skill_img' src={require('../img/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-wordmark-programming-langugae-language-pack-logos-icons-1175238.webp')} alt="" />
                        <h3>{countcss}%</h3>

                    </div>
                </div>
                <div className="skillbar">
                    <div className="skill_png" style={{ backgroundImage: `conic-gradient(#8750f7 ${countjs}%,rgba(0, 0, 255, 0.247) 12%)` }} onMouseEnter={()=>process('js')}>
                        <img className='skill_img' src={require('../img/javascript.png')} alt="" />
                        <h3>{countjs}%</h3>

                    </div>
                    <div className="skill_png" style={{ backgroundImage: `conic-gradient(#8750f7 ${countnode}%,rgba(0, 0, 255, 0.247) 12%)` }} onMouseEnter={()=>process('node')}>
                        <img className='skill_img' src={require('../img/nodejs.png')} alt="" />
                        <h3>{countnode}%</h3>

                    </div>
                    <div className="skill_png" style={{ backgroundImage: `conic-gradient(#8750f7 ${countGithub}%,rgba(0, 0, 255, 0.247) 12%)` }} onMouseEnter={()=>process('github')}>
                        <img className='skill_img' src={require('../img/github.webp')} alt="" />
                        <h3>{countGithub}%</h3>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Skill