import React from 'react';
import './ClientCard.css'


const ClientCard=(props) => {
    const {client, name, job}=props;
    return (
        <div className='single-client'>
            <img className='client-photo' src={client} alt="happy-client" />
            <blockquote> Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.</blockquote>
            <h3 className='client-name'>{name}</h3>
            <p className='client-job'>{job}</p>
        </div>
    );
};

export default ClientCard;