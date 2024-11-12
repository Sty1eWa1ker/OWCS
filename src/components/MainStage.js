import React from "react";

import '../css/main-stage.css';

import SSG from '../img/teamLogos/ssg.png';
import ENCE from '../img/teamLogos/ence.png';
import TM from '../img/teamLogos/twisted-minds.png';
import VP from '../img/teamLogos/vp.png';
import PoC from '../img/teamLogos/piceOfCake.png';
import SRPC from '../img/teamLogos/srpeakCheck.png';
import QE from '../img/teamLogos/quickesports.png';
import AOMA from '../img/teamLogos/aoma.png';

import TD from '../img/teamLogos/toronto_defiant_logo_-no_wordmark-svg.png';
import NTMR from '../img/teamLogos/ntmr.png';
import NRGS from '../img/teamLogos/nrg-shock.png';
import TSM from '../img/teamLogos/tsm.png';
import CNTMR from '../img/teamLogos/citrus_nation_allmode.png';
import FluffyD from '../img/teamLogos/flff.jpeg';
import Shiki from '../img/teamLogos/shikigami.png';
import RxA from '../img/teamLogos/670e72aa8ba3b851013893.png';

import OWESpray from '../img/owe-spray.png';

export default function MainStage(props) {
    return (
        <div className="main-stage-grid">
            <div className="main-stage-phase round-one">
                <div className="phase-day">
                    <span>{props.phases[0].day}</span>
                    <span>{props.phases[0].date}</span>
                </div>
                <div className="phase-matches">
                    {props.phases[0].matches.map((match, index) => {
                        return (
                            <div className="match" key={index}>
                                <div className="game-number">
                                    <p>Game {index + 1}</p>
                                </div>
                                <div className="team team1">
                                    <div className="team-score">{match.score1}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team1logo}/>
                                        <p>{match.team1}</p>
                                    </div>
                                </div>
                                <div className="team team2">
                                    <div className="team-score">{match.score2}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team2logo}/>
                                        <p>{match.team2}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="main-stage-phase winner-one">
                <div className="phase-day">
                    <span>{props.phases[2].day}</span>
                    <span>{props.phases[2].date}</span>
                </div>
                <div className="phase-matches">
                    {props.phases[2].matches.map((match, index) => {
                        return (
                            <div className="match" key={index}>
                                <div className="game-number">
                                    <p>Game {index + 7}</p>
                                </div>
                                <div className="team team1">
                                    <div className="team-score">{match.score1}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team1logo}/>
                                        <p>{match.team1}</p>
                                    </div>
                                </div>
                                <div className="team team2">
                                    <div className="team-score">{match.score2}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team2logo}/>
                                        <p>{match.team2}</p>
                                    </div>
                                </div>
                            </div>
                    )})}
                </div>
            </div>
            <div className="main-stage-phase winner-finals">
                <div className="phase-day">
                    <span>{props.phases[5].day}</span>
                    <span>{props.phases[5].date}</span>
                </div>
                <div className="phase-matches">
                    {props.phases[5].matches.map((match, index) => {
                        return (
                            <div className="match" key={index}>
                                <div className="game-number">
                                    <p>Game {index + 12}</p>
                                </div>
                                <div className="team team1">
                                    <div className="team-score">{match.score1}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team1logo}/>
                                        <p>{match.team1}</p>
                                    </div>
                                </div>
                                <div className="team team2">
                                    <div className="team-score">{match.score2}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team2logo}/>
                                        <p>{match.team2}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="main-stage-phase grand-final">
                <div className="phase-day">
                    <span>{props.phases[7].day}</span>
                    <span>{props.phases[7].date}</span>
                </div>
                <div className="phase-matches">
                    <div className="finals-title">
                        <img alt="OWCS" src={OWESpray}/>
                        <h2>Grand Finals</h2>
                    </div>
                    {props.phases[7].matches.map((match, index) => {
                        return (
                            <div className="match" key={index}>
                                <div className="game-number">
                                    <p>Game {index + 14}</p>
                                </div>
                                <div className="team team1">
                                    <div className="team-score">{match.score1}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team1logo}/>
                                        {console.log(match.team1logo)}
                                        <p>{match.team1}</p>
                                    </div>
                                </div>
                                <div className="team team2">
                                    <div className="team-score">{match.score2}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team2logo}/>
                                        <p>{match.team2}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="main-stage-phase loser-one">
                <div className="phase-day">
                    <span>{props.phases[1].day}</span>
                    <span>{props.phases[1].date}</span>
                </div>
                <div className="phase-matches">
                    {props.phases[1].matches.map((match, index) => {
                        return (
                            <div className="match" key={index}>
                                <div className="game-number">
                                    <p>Game {index + 5}</p>
                                </div>
                                <div className="team team1">
                                    <div className="team-score">{match.score1}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team1logo}/>
                                        <p>{match.team1}</p>
                                    </div>
                                </div>
                                <div className="team team2">
                                    <div className="team-score">{match.score2}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team2logo}/>
                                        <p>{match.team2}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="main-stage-phase loser-two">
                <div className="phase-day">
                    <span>{props.phases[3].day}</span>
                    <span>{props.phases[3].date}</span>
                </div>
                <div className="phase-matches">
                    {props.phases[3].matches.map((match, index) => {
                        return (
                            <div className="match" key={index}>
                                <div className="game-number">
                                    <p>Game {index + 9}</p>
                                </div>
                                <div className="team team1">
                                    <div className="team-score">{match.score1}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team1logo}/>
                                        <p>{match.team1}</p>
                                    </div>
                                </div>
                                <div className="team team2">
                                    <div className="team-score">{match.score2}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team2logo}/>
                                        <p>{match.team2}</p>
                                    </div>
                                </div>
                            </div>
                    )})}
                </div>
            </div>
            <div className="main-stage-phase loser-three">
                <div className="phase-day">
                    <span>{props.phases[4].day}</span>
                    <span>{props.phases[4].date}</span>
                </div>
                <div className="phase-matches">
                    {props.phases[4].matches.map((match, index) => {
                        return (
                            <div className="match" key={index}>
                                <div className="game-number">
                                    <p>Game {index + 11}</p>
                                </div>
                                <div className="team team1">
                                    <div className="team-score">{match.score1}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team1logo}/>
                                        <p>{match.team1}</p>
                                    </div>
                                </div>
                                <div className="team team2">
                                    <div className="team-score">{match.score2}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team2logo}/>
                                        <p>{match.team2}</p>
                                    </div>
                                </div>
                            </div>
                    )})}
                </div>
            </div>
            <div className="main-stage-phase loser-finals">
                <div className="phase-day">
                    <span>{props.phases[6].day}</span>
                    <span>{props.phases[6].date}</span>
                </div>
                <div className="phase-matches">
                    {props.phases[6].matches.map((match, index) => {
                        return (
                            <div className="match" key={index}>
                                <div className="game-number">
                                    <p>Game {index + 13}</p>
                                </div>
                                <div className="team team1">
                                    <div className="team-score">{match.score1}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team1logo}/>
                                        <p>{match.team1}</p>
                                    </div>
                                </div>
                                <div className="team team2">
                                    <div className="team-score">{match.score2}</div>
                                    <div className="team-name">
                                        <img alt="team-logo" src={match.team2logo}/>
                                        <p>{match.team2}</p>
                                    </div>
                                </div>
                            </div>
                    )})}
                </div>
            </div>
            <div className="bracket-title upper-bracket">
                <h2>Upper Bracket</h2>
            </div>
            <div className="bracket-title lower-bracket">
                <h2>Lower Bracket</h2>
            </div>
        </div>
    )
}