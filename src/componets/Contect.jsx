import React, { useEffect,useRef, useState } from 'react'
import AOS from 'aos';
import swal from 'sweetalert';
function Contect() {

    const [displays, setdisplay] = useState('none')



    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });

    }, []);

    const mobileRef = useRef();
    const validmob = useRef()
    

    const fillmobnum = () => {
        const num = Number(mobileRef.current.value)
         if(isNaN(num)){
             setdisplay('block')
             mobileRef.current.value = ' '
         }
         else{
            setdisplay('none')
         }
    };

    const submit_form = () =>{
        swal("Thanks for Contact us");
    }



    return (
        <div> 
            <section id='contact'>
            <div className="contact_section1">
                <h1 style={{ textAlign: 'center', width: '100%' }}>Contact <span style={{ color: '#8750f7' }}>Me</span></h1>

                <div className="contact_form" data-aos="zoom-in">
                    <h1 className='i_am_h1_color'>Let’s work <br /> together!</h1>
                    <form action="" method="" onSubmit={submit_form}>
                        <input type="text" placeholder='Name' required />
                        <input type='email' placeholder='Enter Your E-mail' required /><br />
                        <input type="text" placeholder='Mobile Number' onChange={fillmobnum}  ref={mobileRef}  id='num_contact' required />
                        <label htmlFor="num_contact" id='validmob' style={{display:displays,color:'red',width:'auto', marginLeft:'10px'}}>Please Enter a valied Number</label>
                        <input type="text" placeholder='Subject' /><br />
                        <textarea name="" id="" placeholder='Your Message' required></textarea>
                        <button type='submit'>Send message</button>
                    </form>
                </div>
                <div className="contact_info" data-aos="zoom-in">

                    <div className='flexForcontact'><button className='my_buttons my_linkdin'><i class="fa fa-phone" aria-hidden="true"></i></button><p>Phone <br /><a href="tel:+919983552078"> +91 9983552078</a></p></div>
                    <div className='flexForcontact'><button className='my_buttons my_linkdin'><i class="fa fa-envelope-o" aria-hidden="true"></i></button> <p>E-mail <br /><a href="mailto:rr1341570@gmail.com"> rr1341570@gmail.com</a></p></div>
                    <div className='flexForcontact'><button className='my_buttons my_linkdin'><i class="fa fa-location-arrow" aria-hidden="true"></i></button><p>Address<br /><a href="https://maps.app.goo.gl/JtNAqmH9sX7CGS6B6"> Govindgarh Alwar (Raj)</a> </p></div>


                </div>
            </div>
            </section>
        </div>
    )
}

export default Contect