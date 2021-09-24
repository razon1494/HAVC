import React from 'react';
import servicePhoto1 from './img/service-1.png';
import servicePhoto2 from './img/Service-2.png';
import servicePhoto3 from './img/service-3.png';
import './ServiceCard.css'
const ServiceCard=() => {
    const cardStyle={
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
    }
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-5">
        <div className="col">
                    <div className="card h-100 service-card" style={cardStyle}>
                        <img src={servicePhoto1} className="card-img-top" alt="Install"/>
                <div className="card-body">
                    <h5 className="card-title">A/C Installation</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <button className='know-more-btn'><small className="text-muted">Know More</small></button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100" style={cardStyle}>
                <img src={servicePhoto2}  className="card-img-top" alt="Maintain"/>
                <div className="card-body">
                    <h5 className="card-title">Maintanance & Repair</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                    <button className='know-more-btn'> <small className="text-muted">Know More</small></button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100 " style={cardStyle}>
                <img src={servicePhoto3}  className="card-img-top" alt="cleaning"/>
                <div className="card-body">
                    <h5 className="card-title">Cleaning & Optimization</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                        content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                   <button className='know-more-btn'> <small className="text-muted">Know More</small></button>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default ServiceCard;