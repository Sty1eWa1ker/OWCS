import React from "react";
import { NavLink } from 'react-router-dom';
import '../css/header.css';

import OWESLogo from '../img/ow_esports_logo_horizontal_backplate_lightbg.png';

export default function Header() {
    const [isExpanded, setIsExpanded] = React.useState(false);
    return (
        <>
          <nav>
            <ul>
              <img src={OWESLogo} alt="OW Esport Logo" />
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/schedule">Schedule</NavLink></li>
              <li><NavLink to="/rankings">Rankings</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li>
                <button className="primary" onClick={() => setIsExpanded(prevExpanded => !prevExpanded)}>Watch Now</button>
                { isExpanded && <div className="dropdown">
                    <ul>
                        <li><a href="https://www.twitch.tv/ow_esports">Twitch</a></li>
                        <li><a href="https://www.youtube.com/@OW_esports">Youtube</a></li>
                    </ul>
                </div>}
              </li>
            </ul>
          </nav>  
        </>
    );
}