import React from "react";
import './styles/Main.css'; 
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import amrit from './Assets/w.JPG';

const Main = () => {
    return (
        <body>
            <div className="main">
                <div className="main_container">
                    <div className="main_content">
                        <div className="text">
                            <p>Hello Everyone!</p>
                            <h1>I am Rahul</h1>
                            <p>BCA Student from Medhavi Skills University</p>
                            <div className="icons">
                                <Twitter className="icon" />
                                <Instagram className="icon" />
                                <Facebook className="icon" />
                                <LinkedIn className="icon" />
                            </div>
                            <br></br>
                            <div className="buttons">
                                <button>See Me</button>
                                <button>Hire Me</button>
                            
                            </div>
                        </div>
                        <div className="main_img">
                            <img src={amrit} alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Main;
