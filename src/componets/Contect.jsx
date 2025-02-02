import React from 'react'

function Contect() {
    return (
        <div>
            <div className="contact_section1">
                <h1 style={{ textAlign: 'center' }}>Contact <span style={{ color: '#8750f7' }}>Me</span></h1>
                <div className="contact_form">
                    <form action="" method="post">
                        <input type="text" placeholder='Name' />
                        <input type='text' placeholder='Enter Your E-mail' /><br />
                        <input type="number" placeholder='Mobile Number' />
                        <input type="text" placeholder='Subject' /><br />
                        <textarea name="" id="" placeholder='Your Message'></textarea>
                        <button type='submite'>Send message</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contect