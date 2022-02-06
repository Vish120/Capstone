import React from 'react'
import './Home.css'
import logo from '../../assets/logo.png'
import location from '../../assets/location.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'

const Footer = () => {
    return (
        <>
            <div className='LightBlue row mx-0'>
                <div className='col-md-4 col-12 mx-auto pt-5 text-center'>
                    <img className='logo' src={logo} alt=""></img>
                </div>
                <div className='col-md-4 col-12 mx-auto pt-5'>
                    <div className='d-inline-flex'>
                        <img src={location} alt="" width="20px"></img>
                        <h6 className='mx-2 my-1'>Address:</h6>
                    </div>
                    <p className='RedColor'> 99 Vaughan Road. Suite 608. Toronto, ON M6C 4A9</p>
                    <hr />
                    <div className='d-inline-flex'>
                        <img src={phone} alt="" width="20px" height="20px"></img>
                        <p className='RedColor mx-2'>Phone: +647-244-6973</p>
                    </div>
                    <br/>
                    <div className='d-inline-flex'>
                        <img src={email} alt="" width="20px" height="20px"></img>
                        <p className='RedColor mx-2'>contractorshehzad@gmail.com</p>
                    </div>

                </div>
                <div className='col-md-4 col-12 mx-auto pt-5 text-center'>
                    <h6 className='mx-2 my-1 font-weight-bold'>Newsletter</h6>
                    <p className='RedColor'>Subscribe to our newsletter and stay up to date with all events coming straight in your mailbox:</p>
                    <div className="input-group mb-3 ">
                        <input type="text" className="form-control bgBlue" placeholder="Your email address:" aria-label="Your email address:" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span class="input-group-text White font-weight-bold" style={{ backgroundColor: '#5AA3E9' }} id="basic-addon2">&#62;</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;