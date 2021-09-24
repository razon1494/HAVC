import React from 'react';
import './Progress.css'

const Progress = () => {
    return (
        <div className='progress-body'>
            <div className='all-progress container d-md-flex justify-content-between'>
                <div className='single-progrss'>
                    <i class="fas ico fa-smile"></i>
                    <h1>3589</h1>
                    <p>Satisfied Customer</p>
                </div>
                <div className='single-progrss'>
                    <i class="fas ico fa-user-check"></i>
                    <h1>868</h1>
                    <p>Professionals</p>
                </div>
                <div className='single-progrss'>
                    <i class="fas ico fa-cogs"></i>
                    <h1>5148</h1>
                    <p>Equipment Sold</p>
                </div>
                <div className='single-progrss'>
                    <i class="fas ico fa-code-branch"></i>
                    <h1>25</h1>
                    <p>Branches Operating</p>
                </div>
            </div>
        </div>
    );
};

export default Progress;