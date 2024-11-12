import React from "react";

export default function GroupeStage(props) {
    return (
        <div className="match-day">
            <h2>{props.day}</h2>
            <div className="matches-container">
            {props.matches.map((match) => (
                    <div className="match" key={match.id}>
                        <div className="region-tag">
                            <div>{match.region}</div>
                        </div>
                        <div className="match-up">
                            <div className="team">
                                <span>{match.team1}</span>
                                <img src={match.team1Logo} alt="team-logo" />
                            </div>
                            <div className="score">
                                <span className={match.score1 > match.score2 ? "" : "loss"}>{match.score1}</span>
                                <span>-</span>
                                <span className={match.score2 > match.score1 ? "" : "loss"}>{match.score2}</span>
                            </div>
                            <div className="team">
                                <img src={match.team2Logo} alt="team-logo" />
                                <span>{match.team2}</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <span>{match.date}</span>
                            <span>{match.status}</span>
                            <span>{match.groupe}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}