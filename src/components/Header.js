import React, { useState } from 'react';
import './styles/Header.css';  // Ensure the correct path to your CSS file
import { Close } from '@material-ui/icons'; // Ensure Material-UI icons are installed
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { MenuBookOutlined } from '@mui/icons-material';

const Header = () => {
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    };

    return (
        <div className="header">
            <div className="header_logo">
                <h1>Tabahi</h1>
            </div>
            <nav>
                <ul>
                    <li className="closed">
                        <Close className="close" onClick={showMenu} />
                    </li>
                    <li>
                        <Link to="/"><b>Home</b></Link>
                    </li>
                    <li>
                        <Link to="/"><b>About</b></Link>
                    </li>
                    <li>
                        <Link to="/"><b>Portfolio</b></Link>
                    </li>
                    <li>
                        <Link to="/"><b>Blog</b></Link>
                    </li>
                    <li>
                        <Link to="/"><b>Contact</b></Link>
                    </li>
                </ul>
            </nav>
            <div className="changer">
                <MenuBookOutlined className="menu" onClick={showMenu} />
            </div>
        </div>
    );
};

export default Header;
