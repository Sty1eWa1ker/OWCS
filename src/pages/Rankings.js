import React from "react";

import "../css/rankings.css";

import AmericaGlobe from "../img/icons/earthAmerica.svg";
import AmericaGlobeBlack from "../img/icons/earthAmericsBlack.svg";
import EuropeGlobe from "../img/icons/earthEurope.svg";
import EuropeGlobeBlack from "../img/icons/earthEuropeBlack.svg";

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

const EMEA_Teams =[
    {id: 0, logo: SSG, name: "Spacestation", players: ["Hadi", "Sparker", "Seico", "Funnyastro", "Lando", "Backbone", "KSAA"], points: 1580},
    {id: 1, logo: ENCE, name: "ENCE", players: ["Chase", "Vestola", "Kai", "Kevster", "Masaa", "Crimzo", "Algoso5", "Wmaimone", "Kellex"], points: 1550},
    {id: 2, logo: TM, name: "Twisted Minds", players: ["LBBD7", "Quartz", "Youbi", "TVNT", "Bliss", "Vigilante"], points: 925},
    {id: 3, logo: VP, name: "Virtus.Pro", players: ["Galaa", "Khenail", "Shockwave", "Clowd", "Sauna", "Raajaro"], points: 895},
    {id: 4, logo: PoC, name: "Piece of Cake", players: ["Naga", "Xzodyal", "Tred", "Crispy", "Scyle"], points: 685},
    {id: 5, logo: SRPC, name: "SRPeakCheck", players: ["Phi", "Ghost91", "Danedd", "LHCloudy", "Ilppi13", "Grim"], points: 500},
    {id: 6, logo: QE, name: "Quick Esports", players:["Ken", "Loren", "Hitori", "Yoham", "Strebor"], points: 480},
    {id: 7, logo: AOMA, name: "A one man Army", players:["Eis", "Avo", "Topdragon", "Donghun", "Alpha"], points: 470}
]
const NA_Teams = [
    {id: 0, logo: TD, name: "Toronto Defiant", players: ["Someone", "Mer1t", "Sugarfree", "Vega", "Rupal"], points: 2000},
    {id: 1, logo: NTMR, name: "NTMR", players: ["Admiral", "Seeker", "Infekted", "Lethal", "Cjay", "Zeruhh"], points: 1150},
    {id: 2, logo: NRGS, name: "NRGShock", players: ["Scissors", "PGE", "Rakattack", "Cal", "Attack", "Tr33", "Ultraviolet", "Kellan"], points: 970},
    {id: 3, logo: TSM, name: "TSM", players: ["Chopper", "Renko", "K1ng", "Lep", "Rokit", "Icy"], points: 875},
    {id: 4, logo: CNTMR, name: "Citrus NTMR", players: ["Zeb", "Tap", "Jacob", "Neutral", "Kronik"], points: 700},
    {id: 5, logo: FluffyD, name: "Fluffydreamland", players: ["Chime", "Grapes", "Haven", "Divinity", "Manually", "Prota", "Astro"], points: 680},
    {id: 6, logo: Shiki, name: "Shikigami", players:["Amadou", "Aspect", "Ryan", "Solo", "Tristan", "Noctis", "Graveyard"], points: 425},
    {id: 7, logo: RxA, name: "Rad x Avidity", players:["Wub", "Bun", "Twolzz", "Nenwhy", "Scuffed"], points: 405}
]

export default function Rankings() {
    const [activeTab, setActiveTab] = React.useState("NA");
    const [updateDate, setUpdateDate] = React.useState("2022-10-10");
    const EMEATableRows = EMEA_Teams.map((team) => (
        <>
            <div className="rank-cell">#{team.id + 1}</div>
            <div className="team-cell"><img src={team.logo} alt="team-logo" />{team.name}</div>
            <div className="player-cell">{team.players.map((player) => <div className="player-block"><div className="unskew"><span>{player}</span></div></div>)}</div>
            <div className="points-cell">{team.points}</div>
            {team.id === 2?
            <>
                <div className="cutoff">
                    <span>Quallification Cutoff</span>
                    <div className="cutoff-line"></div>
                </div>
            </>:null}
        </>   
    ));
    const NATableRows = NA_Teams.map((team) => (
        <>
            <div className="rank-cell">#{team.id + 1}</div>
            <div className="team-cell"><img src={team.logo} alt="team-logo" />{team.name}</div>
            <div className="player-cell">{team.players.map((player) => <div className="player-block"><div className="unskew"><span>{player}</span></div></div>)}</div>
            <div className="points-cell">{team.points}</div>
            {team.id === 2?
            <>
                <div className="cutoff">
                    <span>Quallification Cutoff</span>
                    <div className="cutoff-line"></div>
                </div>
            </>:null}
        </> 
    ));
    return (
        <div className="page">
            <div className="page-header">
                <h2>Rankings</h2>
                <span>last updated {updateDate}</span>
            </div>
            <div className="tabs-container">
                <div onClick={() => setActiveTab("NA")} className={activeTab === "NA" ? "tab active" : "tab"}>
                    <img src={activeTab === "NA" ? AmericaGlobeBlack : AmericaGlobe} alt="America" />
                    <span>NA</span>
                </div>
                <div onClick={() => setActiveTab("EU")} className={activeTab === "EU" ? "tab active" : "tab"}>
                    <img src={activeTab === "EU" ? EuropeGlobeBlack : EuropeGlobe} alt="Europe" />
                    <span>EMEA</span>
                </div>
            </div>
            <div className="rankings-table">
                <div className="table-grid">
                    <div className="table-header">
                        <div className="heading-cell">Rank</div>
                        <div className="heading-cell">Team</div>
                        <div className="heading-cell">Players</div>
                        <div className="heading-cell">Points</div>
                    </div>
                    <div className="table-body">
                        {activeTab === "NA" ? NATableRows : EMEATableRows}
                    </div>
                </div>               
            </div>
        </div>
    );
}