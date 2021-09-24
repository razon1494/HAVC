import React from 'react';
import ServiceCard from '../serviceCard/ServiceCard';
import './Services.css'

const Services = () => {
    return (
        <div>
            <div className='services-heading d-md-flex justify-content-around align-items-md-start mt-5 mb-2'>
                <div className='services-text '>
                    <p id='services-p' className='text-start'>Our Services</p>
                    <h1 id='services-title'>What We Can Offer For You</h1>
                </div>
                <div >
                    <br />
                    <button className='btn-grad'>Get A Qoutes</button>
                </div>
            </div>
            <ServiceCard/>
        </div>
    );
};

export default Services;