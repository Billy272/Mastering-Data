import React from "react";

function Header(props) {
    <header className="header">
        <div className="header-content">
            <div className="text-content">
                <h1>{props.name}</h1>
                <p>{props.content}</p>
            </div>
            <div className="text-line">
                <ul className="nav">
                    <li><a href="./Header.js">Home</a></li>
                    <li><a href="../Services/Services.js">Services</a></li>
                    <li><a href="../About/About.js">About</a></li>
                    <li><a href="../Contact/Contact.js">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
}

export default Header;