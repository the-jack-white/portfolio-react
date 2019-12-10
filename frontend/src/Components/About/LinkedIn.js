import React from 'react';

const LinkedIn = () => {
    return (
        <div className="linkedin-main">
            <div className="linkedin-sub">
                <div className="linkedin-picture-container">
                    <img className="linkedin-picture" src="https://via.placeholder.com/150" alt="Profile Picture" />
                </div>
            </div>
            <div className="linkedin-sub">
                <div className="linkedin-content">
                    <h3>Jack White</h3>
                    <p>Web Developer at Biz2Click</p>
                    <button className="linkedin-button" href="#">View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default LinkedIn;