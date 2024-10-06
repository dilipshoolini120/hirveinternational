import React, {useState} from "react";
import { Button } from './../Button'
import '../../App.css';
import './../ContactUs.css'
import Validation from "../formValidation";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
    const [values, setValues] = useState({
        name:'',
        phone:'',
        email:'',
        company:'',
        message:''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({ })

    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]:[event.target.value ]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if(err.name === "" && err.phone === "" && err.email === "" && err.message === "" ){
            axios.post('http://localhost:8081/contact-us', values)
            .then(res => {
                alert('You have successfully sent us your details!')
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }
    return ( <>
    <h1 className="contact-us"> GET IN TOUCH</h1>
        <form className='contact-sub' onSubmit={handleSubmit}>
            <div className='input-areas'>
                <div className="input-area-wrapper">    
                    <div className="area">
                        <p className='contact-sub-heading'>Name</p>
                        <input type='text' name='name' placeholder='Your Name' onChange={handleInput} 
                        className='contact-input' required/>
                        {errors.name && <span className="text-danger"> {errors.nam}</span>}
                    </div>    
                    <div className="area">
                        <p className='contact-sub-heading'>Email</p>
                        <input type='email' name='email' placeholder='Your Email' 
                        onChange={handleInput}  className='contact-input' required/>
                        {errors.email && <span className="text-danger"> {errors.email}</span>}
                    </div>
                    <div  className="area">
                        <p className='contact-sub-heading'>Phone</p>
                        <input type='text' name='phone' placeholder='Your Phone Number' 
                        onChange={handleInput} className='contact-input' maxLength="10" required/>
                        {errors.phone && <span className="text-danger"> {errors.phone}</span>}
                    </div>
    
                    <div className="area">
                        <p className='contact-sub-heading'>Representative Company</p>
                        <input type='text' name='company' placeholder='Your Company' 
                        onChange={handleInput} className='contact-input'/>
                    </div>
                </div>
            </div>
            <div className='input-areas-que'>
            <div className="input-area-q">
                    <div>
                        <p className="contact-sub-heading-q">Query</p>
                        <input type='text' name='message' placeholder='Your Message' 
                        onChange={handleInput}  className='contact-input-q' required/>
                        {errors.message && <span className="text-danger"> {errors.message}</span>}
                    </div>
                </div>
            </div>
            <div className="input-area-btn">
                <button className='btn--primary' type='submit' >Send Message</button>
            </div>
        </form>
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