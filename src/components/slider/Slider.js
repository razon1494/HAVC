import React from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import SwiperCore from 'swiper';
// import './swiper/swiper-bundle.css';
import slidePhoto1 from './img/slider-6.png';
import slidePhoto2 from './img/slider-5.png';
import slidePhoto3 from './img/slider-7.png';

const Slider=() => {
    const carouselTitle={
        color: 'orangeRed',
        fontSize: '2rem',
        fontWeight:'500'
    }
    const carouselText={
        color: 'darkgray',
        fontSize: '1.5rem'
    }

    return (
        <div className='mx-5 px-5'>
           <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slidePhoto1} className="d-block w-100" alt="Service"/>
                    <div className="carousel-caption d-none d-md-block">
                            <h5 style={carouselTitle}>Repair Your AC Parts</h5>
                        <p style={carouselText}>Our Master Technitians will take care of your products like a child.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slidePhoto2} className="d-block w-100" alt="Ac cooling" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={carouselTitle}>Enjoy Refreshing Cool Air</h5>
                        <p style={carouselText}>We have so many variant of AC model that will blow your mind with cool refreshing breeze.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slidePhoto3} className="d-block w-100" alt="Center" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={carouselTitle}>Central AC Installation</h5>
                        <p style={carouselText}>For Industry and other purpose we will serve full central ac service.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    );
};

export default Slider;