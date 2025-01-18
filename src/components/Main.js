import React from "react";
import './styles/Main.css'; 
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import './React_img/background.jpg';
const Main = () => {
    return (
        <div className="main">
            <div className="main_container">
                <div className="main_content">
                    <div className="text">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>Hello Everyone!</p>
                        <h1>
                            I am Rahul
                        </h1>
                        <p>BCA Student - 202204100028</p>

                        <div className="icons">
                            <Twitter className="icon" />
                            <Instagram className="icon" />
                            <Facebook className="icon" />
                            <LinkedIn className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
