import React from "react";
import { NavLink } from 'react-router-dom';
import '../css/header.css';

import OWESLogo from '../img/ow_esports_logo_horizontal_backplate_lightbg.png';
import TwitchLogo from '../img/icons/twitch.svg';
import YoutubeLogo from '../img/icons/youtube.svg';

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
                        <li>
                          <button className="primary twitch"><img src={TwitchLogo} /><a target="_blank" href="https://www.twitch.tv/ow_esports">Twitch</a></button>
                        </li>
                        <li>
                          <button className="primary youtube"><img src={YoutubeLogo} /><a target="_blank" href="https://www.youtube.com/@OW_esports">Youtube</a></button>
                        </li>
                    </ul>
                </div>}
              </li>
            </ul>
          </nav>  
        </>
    );
}