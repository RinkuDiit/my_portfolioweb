import React from 'react'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer_img">
                    <img src={require('../img/Screenshot_2025-01-31_070119-removebg-preview.png')} alt="" />
                </div>
                <div className='flexForcontact'><button className='my_buttons my_linkdin'><i class="fa fa-phone" aria-hidden="true"></i></button><p>Phone <br /><a href="tel:+919983552078"> +91 9983552078</a></p></div>
                <div className='flexForcontact'><button className='my_buttons my_linkdin'><i class="fa fa-envelope-o" aria-hidden="true"></i></button> <p>E-mail <br /><a href="mailto:rr1341570@gmail.com"> rr1341570@gmail.com</a></p></div>
                <div className='flexForcontact'><button className='my_buttons my_linkdin'><i class="fa fa-location-arrow" aria-hidden="true"></i></button><p>Address<br /><a href="https://maps.app.goo.gl/JtNAqmH9sX7CGS6B6"> Govindgarh Alwar (Raj)</a> </p></div>

            </div>
        </div>
    )
}

export default Footer