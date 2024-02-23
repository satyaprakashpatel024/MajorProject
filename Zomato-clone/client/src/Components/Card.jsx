import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Card.css';
const Card = () => {
    return (
        <div className='container mt-5 w-75'>
        <div className="row">
            <div className="col-lg-4">
                <div className="cardImage">
                    <img src="https://images.unsplash.com/photo-1550304952-9d1e3444f713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div>
                        <h2>Order Online</h2>
                        <p>stay home stay safe</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardImage">
                    <img src="https://images.unsplash.com/photo-1550304952-9d1e3444f713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div>
                        <h2>Order Online</h2>
                        <p>stay home stay safe</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="cardImage">
                    <img src="https://images.unsplash.com/photo-1550304952-9d1e3444f713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div><h2>Order Online</h2>
                    <p>stay home stay safe</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Card;