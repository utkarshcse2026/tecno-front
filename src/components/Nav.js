import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <ul className="nav-ul">
                <li>
                    <Link to="/map">Map</Link>
                </li>
                <li>
                    <Link to="/techinput">Input Technology</Link>
                </li>
                <li>
                    <Link to="/info">Technology Info</Link>
                </li>

                <li>
                    <Link to="/compare">Compare</Link>
                </li>
                
            </ul>
        </div>
    );
}

export default Nav;