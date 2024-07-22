import { Link } from "react-router-dom";
import React, { useState } from "react";
import '../../Styles/Header.css';

function Header() {
    const [fixedButton, setFixedButton] = useState("Home");

    const handleButtonClick = (buttonName) => {
        setFixedButton(buttonName);
    };

    return (
        <header>
            <div className="nav-bar">
                <div className="nav-bar-container">
                    <Link to="/">
                        <button
                            className={fixedButton === "Home" ? "btn-fixed" : ""}
                            onClick={() => handleButtonClick("Home")}
                        >
                            Home
                        </button>
                    </Link>
                    <Link to="/Profils">
                        <button
                            className={fixedButton === "Profils" ? "btn-fixed" : ""}
                            onClick={() => handleButtonClick("Profils")}
                        >
                            Profils
                        </button>
                    </Link>
                    <Link to="/Contact">
                        <button
                            className={fixedButton === "Contact" ? "btn-fixed" : ""}
                            onClick={() => handleButtonClick("Contact")}
                        >
                            Contact
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
