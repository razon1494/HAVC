import React from 'react';
import ClientCard from '../clientCard/ClientCard';
import './Client.css'
import client1 from '../../img/client1.png'
import client2 from '../../img/client2.png'
import client3 from '../../img/client4.png'
const Client = () => {
    return (
        <div className='container client-say'>
            <p className='testimonial'>TESTIMONIALS</p>
            <h1>What Client Say</h1>
            <p className='p-text'>We place huge value on strong relationships and have seen the benefit they bring to our business.<br/> Customer feedback is vital in helping us to get it right.</p>
            <div className="client-comments d-md-flex">
                <ClientCard client={client1} name='Nat Reynolds' job='Chief Accountant'/>
                <ClientCard client={client2} name='Celia Almeda' job='Secretary'/>
                <ClientCard client={client3} name='Bob Roberts' job='Sales Manager'/>
            </div>

        </div>
    );
};

export default Client;