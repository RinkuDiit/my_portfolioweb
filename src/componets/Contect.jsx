import React from 'react'

function Contect() {
    return (
        <div>
            <div className="contact_section1">
                <h1 style={{ textAlign: 'center',width:'100%' }}>Contact <span style={{ color: '#8750f7' }}>Me</span></h1>
                
                <div className="contact_form">
                    <h1 className='i_am_h1_color'>Let’s work <br /> together!</h1>
                    <form action="" method="post">
                        <input type="text" placeholder='Name' />
                        <input type='text' placeholder='Enter Your E-mail' /><br />
                        <input type="number" placeholder='Mobile Number' />
                        <input type="text" placeholder='Subject' /><br />
                        <textarea name="" id="" placeholder='Your Message'></textarea>
                        <button type='submite'>Send message</button>
                    </form>
                </div>
                <div className="contact_info">
                    
                        <div className='flexForcontact'><button className='my_buttons my_linkdin'><i class="fa fa-phone" aria-hidden="true"></i></button><p>Phone <br /><a href="tel:+919983552078"> +91 9983552078</a></p></div>
                        <div className='flexForcontact'><button className='my_buttons my_linkdin'><i class="fa fa-envelope-o" aria-hidden="true"></i></button> <p>E-mail <br /><a href="mailto:rr1341570@gmail.com"> rr1341570@gmail.com</a></p></div>
                        <div className='flexForcontact'><button className='my_buttons my_linkdin'><i class="fa fa-location-arrow" aria-hidden="true"></i></button><p>Address<br /><a href="https://maps.app.goo.gl/JtNAqmH9sX7CGS6B6"> Govindgarh Alwar (Raj)</a> </p></div>

                    
                </div>
            </div>
        </div>
    )
}

export default Contect