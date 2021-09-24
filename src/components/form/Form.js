import React from 'react';
import './Form.css'
const Form = () => {
    return (
        <div className='full-form mt-5'>

            <div className='form-body'>
                <form class="row g-4 form-input  container ms-5 ps-5 pt-5">
                    <h2 className='form-title'>Get A Qoute</h2>
                        <div class="col-md-6">
                        <input type="text" class="form-control form-design" id="" placeholder='Name' style={{color:'whitesmoke'}}/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control form-design" id="inputPassword4" placeholder='Phone Number'/>
                        </div>
                        <div class="col-6">
                            <input type="email" class="form-control form-design" id="inputEmail4" placeholder="Email"/>
                        </div>

                        <div class="col-md-6">
                            <select id="inputState" class="form-select form-design">
                                <option selected>Choose A Service</option>
                                <option>Repair</option>
                                <option>Install</option>
                                <option>Buy</option>
                            </select>
                        </div>
                        <div class="col-12">
                                <textarea class="form-control form-design" id="exampleFormControlTextarea1" rows="4" >Message</textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-form px-4 py-2">Send</button>
                        </div>
                    </form>

                <div className="form-vdo">
                   <iframe className='responsive-iframe' width="100%" height="100%" src="https://www.youtube.com/embed/rD0IDifBAS4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Form;