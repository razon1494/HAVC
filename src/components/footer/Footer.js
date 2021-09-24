import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
<footer class="footer-distributed">

    <div class="footer-left">

        <h3>Future<span> Engineering</span></h3>

        <p class="footer-links">
            <a href="#">Home</a>
            ·
            <a href="#">Blog</a>
            ·
            <a href="#">Pricing</a>
            ·
            <a href="#">About</a>
            ·
            <a href="#">Faq</a>
            ·
            <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">future engineering &copy; 2012</p>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>19 Shahid Tajuddin Ahmed Sharoni,Bara Maghbazar</span>  Dhaka, Bangladesh</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+880171-321446</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">futureengineeringcobd@yahoo.com</a></p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>About the company</span>
            Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
        </p>

        <div class="footer-icons">

            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

        </div>

    </div>

</footer>

        </div>
    );
};

export default Footer;