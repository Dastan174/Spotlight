import React from 'react';

const Contact = () => {
    return (
        <>
        <div style={{paddingTop:"40px"}} className="contact">
            <div className="container">
                <h1 style={{fontSize:"42px",fontWeight:"400",letterSpacing:"0.7px"}}>Contact Us</h1>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"40px"}} className="contact-us">
                    <div className="inputs">
                        <input className='name' type="text" placeholder='Name' />
                        <input className='email' type="email" placeholder='Email' />
                    </div>
                    <input className='number' type="text" placeholder='Phone number' />
                    <input className='comment' type="text" placeholder='Comment' />
                    <button className='send-contact'>Send </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;