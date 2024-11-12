import React from "react";

import '../css/home.css';

import Hero from '../img/hero-img.png';
import Tournament from '../img/DreamHack-Dallas-owcs.avif';
import fullLogo from '../img/full-view-logo.png';
import Format from '../img/format.png';
import Trophy from '../img/trophy.jpg';
import MapRotation from '../img/mapRotation.jpeg';

export default function Home() {
    return (
        <div className="page home">
            <article>
                <section id="intro">
                    <div className="home-header">
                        <div className="skewed-container"><div className="unskew"><span>OWCS</span></div></div>
                        <h1>Overwatch Champions Series 2024 – Turnierformat</h1>
                    </div>
                    <p>Willkommen zu den Overwatch Champions Series 2024 (OWCS), der ultimativen Meisterschaft für Overwatch-Spieler und Fans weltweit! Die OWCS bringen Teams aus verschiedenen Regionen in einem dynamischen, mehrstufigen Turniersystem zusammen, das sich über mehrere Monate erstreckt und spannende LAN-Events wie die DreamHack Dallas und die DreamHack Stockholm Finals umfasst.</p>
                    <p>Das Turnierformat der OWCS ist in vier Phasen unterteilt, die jeweils in drei Turnierabschnitte gegliedert sind: Swiss-Phase, Gruppenphase und Hauptevent. Die besten Teams sammeln im Verlauf des Turniers „Circuit Points“, die für die Qualifikation zu den LAN-Events und zur Bestimmung der Rangliste entscheidend sind.</p>
                </section>
                <div className="home-img-container">
                    <img alt="Hero" className="hero-img home-images" src={Hero}/>
                </div>
                <div className="home-img-container">
                    <img alt="Logo" className="logo-img home-images" src={fullLogo}/>
                </div>
                <section id="phases">
                    <h3>Turnierphasen</h3>
                    <ol>
                        <li>
                            <h4>Swiss-Phase</h4>
                            <p>Die Swiss-Phase ist der erste Abschnitt jeder Turnierphase und funktioniert nach einem Schweizer System. Hierbei treten Teams in mehreren Runden gegeneinander an und werden in jeder Runde basierend auf ihren bisherigen Leistungen gegen ähnlich erfolgreiche Teams gepaart. Jedes Match in der Swiss-Phase wird im „First-to-2“-Format gespielt, wobei das erste Team, das zwei Karten gewinnt, das Match für sich entscheidet.</p>
                            <ul>
                                <li>Ziel: Die besten Teams in der Swiss-Phase qualifizieren sich für die nächste Runde, die Gruppenphase.</li>
                                <li>Spieldauer: Jedes Match dauert maximal drei Karten.</li>
                                <li>Format: First to 2 (FT2).</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Gruppenphase</h4>
                            <p>In der Gruppenphase treten die besten Teams aus der Swiss-Phase im „GSL-Stil“ gegeneinander an. Dies bedeutet, dass die Teams in Gruppen aufgeteilt werden und jeder gegen jeden spielt. Der Modus ist „First-to-3“, also das erste Team, das drei Karten gewinnt, entscheidet das Match für sich.</p>
                            <ul>
                                <li>Gruppenaufteilung: Sechzehn Teams werden in der Gruppenphase in kleinere Gruppen aufgeteilt.</li>
                                <li>Format: First to 3 (FT3) – die Teams spielen, bis eine Mannschaft drei Karten gewonnen hat.</li>
                                <li>Ziel: Die besten Teams aus jeder Gruppe steigen in das Hauptevent auf.</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Hauptevent</h4>
                            <p>Das Hauptevent bildet den Höhepunkt jeder Turnierphase. Die besten acht Teams aus der Gruppenphase treffen hier aufeinander und kämpfen im KO-System um den Sieg. Die Matches folgen dem „First-to-3“-Modus, das Finale jedoch dem „First-to-4“-Modus, bei dem vier gewonnene Karten für den Gesamtsieg notwendig sind.</p>
                            <ul>
                                <li>Teilnehmerzahl: Acht Teams qualifizieren sich für das Hauptevent.</li>
                                <li>Format: First to 3 (FT3) für alle Matches außer dem Finale, das im First to 4 (FT4) ausgetragen wird.</li>
                                <li>Finale: Das Finale beinhaltet keine Double-Elimination-Runde – das erste Team, das vier Karten gewinnt, holt den Gesamtsieg der Phase.</li>
                            </ul>
                        </li>
                    </ol>
                </section>
                <section id="lan">
                    <h3>LAN-Events: OWCS Major und OWCS Finals</h3>
                    <p>Nach Abschluss der ersten zwei Phasen (Stages) findet das DreamHack Dallas OWCS Major statt. Nach den vier Turnierphasen der Saison treffen sich die Top-Teams schließlich in Schweden zu den DreamHack Stockholm OWCS Finals. Die Teilnahme an diesen LAN-Events ist heiß begehrt, und nur die besten Teams aus Nordamerika, Europa, dem Nahen Osten, Afrika und Asien qualifizieren sich. Bei diesen Live-Events stehen große Preisgelder und der prestigeträchtige Titel als Overwatch Champions auf dem Spiel.</p>
                    <ul>
                        <li>Major-Event: DreamHack Dallas, USA – Qualifikation durch Stage 2.</li>
                        <li>Final-Event: DreamHack Stockholm, Schweden – Qualifikation durch Stage 4.</li>
                    </ul>
                </section>
                <div className="home-img-container">
                    <img alt="Tournament" className="tournament-img home-images" src={Tournament}/>
                </div>
                <div className="home-img-container">
                    <img alt="format" className="team-img home-images" src={Trophy}/>
                </div>
                <section id="points">
                    <h3>Circuit Points und Rangliste</h3>
                    <p>Über alle Phasen hinweg sammeln die Teams Circuit Points basierend auf ihren Platzierungen. Diese Punkte bestimmen die Platzierung der Teams und spielen eine entscheidende Rolle für die Qualifikation zu den LAN-Events. Die Punktevergabe unterscheidet sich in jeder Phase, wobei späteren Phasen mehr Gewicht beigemessen wird.</p>
                </section>
                <section id="rotation">
                    <h3>Spielmodi und Kartenrotation</h3>
                    <p>Jede Turnierphase beinhaltet verschiedene Spielmodi und Karten, um die Wettbewerbsfähigkeit zu maximieren. Die Modi umfassen Control, Hybrid, Push, Escort und Flashpoint. In jeder Runde wird der Modus und die Kartenrotation durch ein Veto-Verfahren bestimmt, das den Teams Flexibilität und Strategie ermöglicht.</p>
                </section>
                <div className="home-img-container">
                    <img alt="Map Rotation" className="tournament-img home-images" src={Format}/>
                </div>
                <div className="full-width-img-container">
                    <img alt="Tournament" className="full-width-img" src={MapRotation}/>
                </div>
            </article>
        </div>
    );
}