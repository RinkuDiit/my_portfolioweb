import React from 'react'

function Projects() {

    const myprojects = [
        {
            title: "E-commerce Website",
            img: require("../img/dnk.png"),
            description: "Developed a fully responsive e-commerce website using React.js and Bootstrap. Implemented features such as product listings and shopping cart. Improved user experience by optimizing the website for mobile devices.",
            link: "https://dnk-pi.vercel.app/"
        },
        {
            title: "Cricket Game App",
            img: require("../img/cricket.png"),
            description: "Created an interactive cricket game application using React.js. Designed intuitive user interfaces and integrated real-time scoring features.",
            link: "https://cricket-t20.vercel.app/"
        },
        {
            title: "Voting EVM Machine",
            img: require("../img/evm.png"),
            description: "Developed a digital voting demo machine simulation using React.js. Implemented secure voting mechanisms and real-time vote counting.",
            link: "https://diit-evm.vercel.app/"
        },
        {
            title: "Login Page",
            img: require("../img/log_reg.png"),
            description: "A simple Registration,Login and Profile page built using HTML, CSS, and JavaScript. Features include:User- friendly interface with modern UI design.lidation for user input fields",
            link: "https://rinkudiit.github.io/login_res/"
        },
        {
            title: "Gizmos UI",
            img: require("../img/tyers.png"),
            description: "A sleek and interactive UI design project focusing on user experience. Features include:Intuitive and visually appealing layout.Smooth animations and transitions for a modern feel.Fully responsive design, ensuring compatibility across devices.",
            link: "https://rinkudiit.github.io/gizmos/"
        },
        {
            title: "Practo Clone",
            img: require("../img/practo.png"), // Replace with actual image path
            description: "A doctor appointment booking web application inspired by Practo, built using React.js. Features include search and booking functionality, user authentication, real-time availability, and a responsive design.",
            link: "https://practo-ecru.vercel.app/"
        }

    ]



    return (
        <div>
            <div className="myprojects">
                <h1 style={{ textAlign: 'center', width: '100%' }}>My  <span style={{ color: '#8750f7' }}>Projects</span></h1>
                {myprojects.map((project) => (
                    <div className="project">
                        <h3><span style={{ color: '#8750f7', fontWeight: 'bold' }}>Project Title :</span> {project.title}</h3>
                        <div className='project_img'><img src={project.img} alt="" /></div>
                        <p><span style={{ color: '#8750f7', fontWeight: 'bold' }}>Description:</span> {project.description}</p>
                        <a href={project.link}><button className='myview my_buttons' type='button'>View</button></a>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects