import React from "react";
import { Button } from './../Button'
import '../../App.css';
import './../ContactUs.css'

export default function ContactUs() {
    return ( <>
    <h1 className="contact-us"> GET IN TOUCH</h1>
    <section className='contact-sub'>
            <div className='input-areas'>
                <div className="input-area-wrapper">
                    <p className='contact-sub-heading'>
                        Name
                    </p>    
                    <form>
                        <input type='text' name='name' placeholder='Your Name' className='contact-input'/>
                    </form>
                    <p className='contact-sub-heading'>
                        Phone 
                    </p>    
                    <form>
                        <input type='text' name='phone' placeholder='Your Phone Number' className='contact-input'/>
                    </form>
                </div>
                <div className="input-area-wrapper">
                    <p className='contact-sub-heading'>
                        Email
                    </p>    
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='contact-input'/>
                    </form>
                    <p className='contact-sub-heading'>
                        Representative Company
                    </p>    
                    <form>
                        <input type='text' name='company' placeholder='Your Company' className='contact-input'/>
                    </form>
                </div>
            </div>
            <div className='input-areas-que'>
            <div className="input-area-q">
                    <p className="contact-sub-heading-q"> 
                        Query
                    </p>
                    <form>
                        <input type='text' name='message' placeholder='Your Message' className='contact-input-q'/>
                    </form>
                </div>
            </div>
            <div className="input-area-btn">
                <Button buttonStyle='btn--primary'>Send Message</Button>
            </div>
        </section>
        <section>
            <div className="contact-us-wrapper">
                <div className="phone-sub">
                    <h2>Phone</h2>
                    <h4>+91 9826277337</h4>
                </div>
                <div className="email-sub">
                    <h2>Email</h2>
                    <h4>info@hirveinternational.com</h4>
                </div>
                <div className="address-sub">
                    <h2>Address</h2>
                    <h4>10,Hemson Colony, 302 Hemson Apartments, Indore - 452001</h4>
                </div>
            </div>
            
        </section>
    </>
    )
}