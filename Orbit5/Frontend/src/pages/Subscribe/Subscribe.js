
import Header from '../Homepage/Header';
import './Subscribe.css'
import subscribe1 from '../../assets/subscribe1.png'
import webinar from '../../assets/webinar.png'
import Footer from '../Homepage/Footer';
import { useState } from 'react';
import axios from 'axios';
const Subscribe = () => {
    const [email, setEmail] = useState('');

    const SubmitEmail = () => {
        const link = "http://localhost:8000/v1/email"
        axios.post(link,
            {
                email: email
            })
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                }
            }).catch(function (error) {
                console.log(error)
            });
    }
    return (
        <>
            <Header />
            <div class="container col-12">
                <img src={subscribe1} alt="Snow" width="100%" height="350px" />
                <div class="bottom-left">Free Weekly Webinar</div>
            </div>
            <div className='col-9 mx-auto my-2'>
                <img src={webinar} alt="Snow" width="100%" height="450px" />
            </div>
            <div className='col-11 mx-auto'>
                <p className='text-center heading font-weight-bold'>What is fascinating about our Webinars?</p>
                <p className='details'>
                    Every Monday we host free webinars featuring guest speakers who are experts in their field. With topics ranging from job search strategies, optimizing LinkedIn, and improving public speaking, to mental health and managing career transitions, our students are exposed to a wide variety of information that gives them the edge in their career journeys.
                </p>
                <p className='details'>   Our students report increased confidence in networking, employer outreach, and interview skills. The knowledge and advice received in the webinars are practical and actionable, and many have put these into practice in their job search with great success, overall leading to their personal and professional development. Students feel equipped with the confidence to thrive in the workplace.
                </p>
                <p className='details'>    Our webinars provide a positive start to the week, and create a sense of energy, fun, and excitement for our students! Through these weekly webinars, students have been able to build a strong sense of community and belonging that translate to offline friendships and connections.
                </p>
                <button className='btn rounded-0 d-block mx-auto font-weight-bold my-3' data-toggle="modal" data-target="#exampleModalCenter" style={{ background: 'rgba(16, 83, 254, 0.52)' }}>
                    Subscribe to our free weekly webinar
                </button>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Subscribe</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <input className='border-0 p-2 col-12' placeholder='Enter Email Address' name='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#message" onClick={SubmitEmail}>Subscribe</button>
                            </div>
                        </div>
                        <div class="modal fade" id="message" tabindex="-1" role="dialog" aria-labelledby="messageTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <h4>Thank You For Subscribing</h4>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Subscribe;