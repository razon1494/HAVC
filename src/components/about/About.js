import React from 'react';
import './About.css'
import image1 from './img/acremote.png'

const About = () => {
    return (
        <div>
            <div className="about-body d-md-flex justify-content-between">
                <div className='about-img'>
                    <img className='img-fluid w-100' src={image1} alt="ac remote"/>
                </div>
                <div className='about-text w-50 container'>
                    <p id='welcome-message'>Welcome To Future Engineering</p>
                    <h1>Quality Heating & Cooling</h1>
                    <p id='main-text'>We provide customers with an industry leading 10-year installation warranty and a two-year service and repair warranty. With most companies, you will get a standard manufacturers warranty on installations and a one-year warranty on service and repair work. We believe our warranties set us apart from our competitors and show our commitment to quality work and service.</p>
                    <h5><i class="ok fas fa-check-square"></i> Authentic Products Imported</h5>
                    <h5><i class="ok fas fa-check-square"></i> Fast Delivery And Free Installation</h5>
                    <h5><i class="ok fas fa-check-square"></i> Authentic Products Imported</h5>
                    <button class='about-btn'>Get in touch</button>
                </div>
            </div>
        </div>
    );
};

export default About;