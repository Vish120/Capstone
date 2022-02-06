import React from 'react'
import './Home.css'
import homeHeader from '../../assets/homeHeader.png'
import detail from '../../assets/detail.png'
import services from '../../assets/services.png'
import Header from './Header'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Homepage = () => {
    return (
        <>
            <Header />
            <div>
                <img src={homeHeader} alt="home" width="100%" height="600px" />
            </div>
            <div className='mt-3 col-11 row mx-auto'>
                <div className='col-md-6 col-12 mx-auto my-1'>
                    <NavLink to="/subscribe">
                        <button className='Orange Radius10 border-0 py-2 px-4 font-weight-bold Blue'>Subscribe to our free Webinars
                        </button>
                    </NavLink>
                </div>
                <div className='col-md-6 col-12 mx-auto my-1'>
                    <button className='Orange Radius10 border-0 py-2 px-4 font-weight-bold Blue' >One On One Coaching
                    </button>
                </div>
            </div>
            <div className="col-12 container my-5">
                <img src={detail} className='detailimg' alt="home" width="100%" height="200px" />
                <div className="centered font-weight-bold">We empower international students to confidently pursue work they
                    love, and thrive in their new home country.</div>
            </div>
            <div className='my-2'>
                <h4 className='text-center font-weight-bold'>Features</h4>
                <div className='col-10 mx-auto bgPink'>
                    <h5 className='text-center Red p-2'>Orbit’s Mission and Purpose</h5>
                </div>
                <div className=' row mx-0'>
                    <div class="card LightBlue Radius43 col-lg-3 col-md-6 col-11 mx-auto my-1" >
                        <div class="card-body">
                            <h5 class="card-title text-center">Our Work</h5>
                            <p class="card-text text-center">Orbit 5 helps international students to make the most of their journey in their new home country. Through weekly webinars, workshops, and one-on-one coaching, our students develop the confidence and job search skills to find and pursue careers they love, thrive in the workplace, and flourish into their best selves, both personally and professionally.</p>
                        </div>
                    </div>
                    <div class="card LightBlue Radius43 col-lg-3 col-md-6 col-11 mx-auto my-1" >
                        <div class="card-body">
                            <h5 class="card-title text-center">Our Dream</h5>
                            <p class="card-text text-center">We envision international talent thriving and making powerful contributions to their host countries while experiencing their own personal growth. We seek to develop an appreciation of the world’s diversity through being exposed to and engaging with the myriad of cultures that coexist in harmony within our society.</p>
                        </div>
                    </div>
                    <div class="card LightBlue Radius43 col-lg-3 col-md-6 col-11 mx-auto my-1" >
                        <div class="card-body">
                            <h5 class="card-title text-center">You</h5>
                            <p class="card-text text-center">Developing a deeper understanding of your unique characteristics and strengths, coupled with learning cutting-edge job search techniques gives you the best chance at finding a career you love and will thrive in. Make the most of your time as an international student so you can build a successful and exciting future!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 container mt-5">
                <img src={services} className='detailimg' alt="home" width="100%" height="550px" />

            </div>
            <Footer />
        </>
    )
}
export default Homepage;