import React from "react";

import "../css/schedule.css";

import AmericaGlobe from "../img/icons/earthAmerica.svg";
import AmericaGlobeBlack from "../img/icons/earthAmericsBlack.svg";
import EuropeGlobe from "../img/icons/earthEurope.svg";
import EuropeGlobeBlack from "../img/icons/earthEuropeBlack.svg";
import EarthGlobe from "../img/icons/earthGlobe.svg";
import EarthGlobeBlack from "../img/icons/earthGlobeBlack.svg";

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

import PH from '../img/owe-spray.png';

import StageCard from "../components/StageCard";
import GroupeStage from "../components/GroupeStage";
import MainStage from "../components/MainStage";

const Stages =[
    { id: 1, stage: "Stage #1", stageType: "Groupe Stage", stageDate: "FEB" },
    { id: 2, stage: "Stage #1", stageType: "Main Event", stageDate: "FEB - MAR" },
    { id: 3, stage: "Stage #2", stageType: "Groupe Stage", stageDate: "APR" },
    { id: 4, stage: "Stage #2", stageType: "Main Event", stageDate: "APR" },
    { id: 5, stage: "Dallas Major", stageType: "Main Event", stageDate: "MAY - JUN" },
    { id: 6, stage: "Stage #3", stageType: "Groupe Stage", stageDate: "AUG" },
    { id: 7, stage: "Stage #3", stageType: "Main Event", stageDate: "AUG - SEP" },
    { id: 8, stage: "Stage #4", stageType: "Groupe Stage", stageDate: "SEP - OCT" },
    { id: 9, stage: "Stage #4", stageType: "Main Event", stageDate: "OCT" },
    { id: 10, stage: "Stockholm Finals", stageType: "Main Event", stageDate: "NOV" },
];

const StageData = [
    {
        id: 1,
        matchDays: [
            {
                id: 1,
                day: "FRI, FEB 9",
                matches: [
                    { 
                        id: 1, 
                        region: "EMEA", 
                        team1: "Spacestation", 
                        team1Logo: SSG, 
                        team2: "Virtus.Pro", 
                        team2Logo: VP, 
                        score1: 3, 
                        score2: 1, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 2, 
                        region: "EMEA", 
                        team1: "Twisted Minds", 
                        team1Logo: TM, 
                        team2: "Quick Esports", 
                        team2Logo: QE, 
                        score1: 3, 
                        score2: 1, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 3, 
                        region: "EMEA", 
                        team1: "ENCE", 
                        team1Logo: ENCE, 
                        team2: "SRPeakCheck", 
                        team2Logo: SRPC, 
                        score1: 3, 
                        score2: 2, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group B" 
                    },
                    { 
                        id: 4, 
                        region: "EMEA", 
                        team1: "Piece of Cake", 
                        team1Logo: PoC, 
                        team2: "A one man Army", 
                        team2Logo: AOMA, 
                        score1: 2, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group B" 
                    }
                ]
            },
            {
                id: 2,
                day: "SAT, FEB 10",
                matches: [
                    { 
                        id: 1, 
                        region: "NA", 
                        team1: "Toronto Defiant", 
                        team1Logo: TD, 
                        team2: "NTMR", 
                        team2Logo: NTMR, 
                        score1: 3, 
                        score2: 1, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 2, 
                        region: "NA", 
                        team1: "Citrus NTMR", 
                        team1Logo: CNTMR, 
                        team2: "Rad x Avidity", 
                        team2Logo: RxA, 
                        score1: 2, 
                        score2: 3, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 3, 
                        region: "NA", 
                        team1: "NRGShock", 
                        team1Logo: NRGS, 
                        team2: "TSM", 
                        team2Logo: TSM, 
                        score1: 3, 
                        score2: 1, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group D" 
                    },
                    { 
                        id: 4, 
                        region: "NA", 
                        team1: "Fluffydreamland", 
                        team1Logo: FluffyD, 
                        team2: "Shikigami", 
                        team2Logo: Shiki, 
                        score1: 2, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group D" 
                    }
                ]
            },
            {
                id: 3,
                day: "SUN, FEB 11",
                matches: [
                    { 
                        id: 1, 
                        region: "EMEA", 
                        team1: "Spacestation", 
                        team1Logo: SSG, 
                        team2: "Twisted Minds", 
                        team2Logo: TM, 
                        score1: 3, 
                        score2: 2, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 2, 
                        region: "EMEA", 
                        team1: "Virtus.Pro", 
                        team1Logo: VP, 
                        team2: "Quick Esports", 
                        team2Logo: QE, 
                        score1: 3, 
                        score2: 2, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 3, 
                        region: "EMEA", 
                        team1: "ENCE", 
                        team1Logo: ENCE, 
                        team2: "Piece of Cake", 
                        team2Logo: PoC, 
                        score1: 3, 
                        score2: 1, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group B" 
                    },
                    { 
                        id: 4, 
                        region: "EMEA", 
                        team1: "SRPeakCheck", 
                        team1Logo: SRPC, 
                        team2: "A one man Army", 
                        team2Logo: AOMA, 
                        score1: 1, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group B" 
                    }
                ]
            },
            {
                id: 4,
                day: "FRI, FEB 16",
                matches: [
                    { 
                        id: 1, 
                        region: "NA", 
                        team1: "Toronto Defiant", 
                        team1Logo: TD, 
                        team2: "Citrus NTMR", 
                        team2Logo: CNTMR, 
                        score1: 3, 
                        score2: 2, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 2, 
                        region: "NA", 
                        team1: "NTMR", 
                        team1Logo: NTMR, 
                        team2: "Rad x Avidity", 
                        team2Logo: RxA, 
                        score1: 3, 
                        score2: 0, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 3, 
                        region: "NA", 
                        team1: "NRGShock", 
                        team1Logo: NRGS, 
                        team2: "Fluffydreamland", 
                        team2Logo: FluffyD, 
                        score1: 3, 
                        score2: 1, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group D" 
                    },
                    { 
                        id: 4, 
                        region: "NA", 
                        team1: "TSM", 
                        team1Logo: TSM, 
                        team2: "Shikigami", 
                        team2Logo: Shiki, 
                        score1: 2, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group D" 
                    }
                ]
            },
            {
                id: 5,
                day: "SAT, FEB 17",
                matches: [
                    { 
                        id: 1, 
                        region: "EMEA", 
                        team1: "Spacestation", 
                        team1Logo: SSG, 
                        team2: "Quick Esports", 
                        team2Logo: QE, 
                        score1: 3, 
                        score2: 0, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 2, 
                        region: "EMEA", 
                        team1: "Virtus.Pro", 
                        team1Logo: VP, 
                        team2: "Twisted Minds", 
                        team2Logo: TM, 
                        score1: 2, 
                        score2: 3, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 3, 
                        region: "EMEA", 
                        team1: "ENCE", 
                        team1Logo: ENCE, 
                        team2: "A one man Army", 
                        team2Logo: AOMA, 
                        score1: 3, 
                        score2: 2, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group B" 
                    },
                    { 
                        id: 4, 
                        region: "EMEA", 
                        team1: "SRPeakCheck", 
                        team1Logo: SRPC, 
                        team2: "Piece of Cake", 
                        team2Logo: PoC, 
                        score1: 2, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group B" 
                    }
                ]
            },
            {
                id: 6,
                day: "SUN, FEB 18",
                matches: [
                    { 
                        id: 1, 
                        region: "NA", 
                        team1: "Toronto Defiant", 
                        team1Logo: TD, 
                        team2: "Rad x Avidity", 
                        team2Logo: RxA, 
                        score1: 3, 
                        score2: 1, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 2, 
                        region: "NA", 
                        team1: "Citrus NTMR", 
                        team1Logo: CNTMR, 
                        team2: "NTMR", 
                        team2Logo: NTMR, 
                        score1: 1, 
                        score2: 3, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 3, 
                        region: "NA", 
                        team1: "NRGShock", 
                        team1Logo: NRGS, 
                        team2: "Shikigami", 
                        team2Logo: Shiki, 
                        score1: 3, 
                        score2: 1, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group D" 
                    },
                    { 
                        id: 4, 
                        region: "NA", 
                        team1: "TSM", 
                        team1Logo: TSM, 
                        team2: "Fluffydreamland", 
                        team2Logo: FluffyD, 
                        score1: 3, 
                        score2: 1, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group D" 
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        matchDays: [
            {
                id: 1,
                day: "FRI, 23 FEB",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Spacestation",
                        team1Logo: SSG,
                        team2: "SRPeakCheck",
                        team2Logo: SRPC,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "Quick Esports",
                        team1Logo: QE,
                        team2: "ENCE",
                        team2Logo: ENCE,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Toronto Defiant",
                        team1Logo: TD,
                        team2: "Citrus NTMR",
                        team2Logo: CNTMR,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "NRGShock",
                        team1Logo: NRGS,
                        team2: "Fluffydreamland",
                        team2Logo: FluffyD,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            },
            {
                id: 2,
                day: "SAT, 24 FEB",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Twisted Minds",
                        team1Logo: TM,
                        team2: "Virtus.Pro",
                        team2Logo: VP,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "Pice of Cake",
                        team1Logo: PoC,
                        team2: "A one man Army",
                        team2Logo: AOMA,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Rad x Avidity",
                        team1Logo: RxA,
                        team2: "NTMR",
                        team2Logo: NTMR,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "Shikigami",
                        team1Logo: Shiki,
                        team2: "TSM",
                        team2Logo: TSM,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            },
            {
                id: 3,
                day: "SUN, 25 FEB",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Spacestation",
                        team1Logo: SSG,
                        team2: "Twisted Minds",
                        team2Logo: TM,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "Quick Esports",
                        team1Logo: QE,
                        team2: "A one man Army",
                        team2Logo: AOMA,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Toronto Defiant",
                        team1Logo: TD,
                        team2: "NTMR",
                        team2Logo: NTMR,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "TSM",
                        team1Logo: TSM,
                        team2: "NRGShock",
                        team2Logo: NRGS,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            },
            {
                id: 4,
                day: "FRI, 1 MAR",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Virtus.Pro",
                        team1Logo: VP,
                        team2: "SRPeakCheck",
                        team2Logo: SRPC,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "ENCE",
                        team1Logo: ENCE,
                        team2: "Pice of Cake",
                        team2Logo: PoC,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Citrus NTMR",
                        team1Logo: CNTMR,
                        team2: "Rad x Avidity",
                        team2Logo: RxA,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "Fluffydreamland",
                        team1Logo: FluffyD,
                        team2: "Shikigami",
                        team2Logo: Shiki,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ] 
            },
            {
                id: 5,
                day: "SAT, 2 MAR",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Spacestation",
                        team1Logo: SSG,
                        team2: "Virtus.Pro",
                        team2Logo: VP,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "Quick Esports",
                        team1Logo: QE,
                        team2: "Pice of Cake",
                        team2Logo: PoC,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Toronto Defiant",
                        team1Logo: TD,
                        team2: "Rad x Avidity",
                        team2Logo: RxA,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "Shikigami",
                        team1Logo: Shiki,
                        team2: "NRGShock",
                        team2Logo: NRGS,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            },
            {
                id: 6,
                day: "SUN, 3 MAR",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Twisted Minds",
                        team1Logo: TM,
                        team2: "SRPeakCheck",
                        team2Logo: SRPC,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "ENCE",
                        team1Logo: ENCE,
                        team2: "A one man Army",
                        team2Logo: AOMA,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Citrus NTMR",
                        team1Logo: CNTMR,
                        team2: "NTMR",
                        team2Logo: NTMR,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "Fluffydreamland",
                        team1Logo: FluffyD,
                        team2: "TSM",
                        team2Logo: TSM,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        matchDays: [
            {
                id: 1,
                day: "FRI, AUG 9",
                matches: [
                    { 
                        id: 1, 
                        region: "EMEA", 
                        team1: "Spacestation", 
                        team1Logo: SSG, 
                        team2: "Virtus.Pro", 
                        team2Logo: VP, 
                        score1: 3, 
                        score2: 1, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 2, 
                        region: "EMEA", 
                        team1: "Twisted Minds", 
                        team1Logo: TM, 
                        team2: "Quick Esports", 
                        team2Logo: QE, 
                        score1: 3, 
                        score2: 1, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 3, 
                        region: "EMEA", 
                        team1: "ENCE", 
                        team1Logo: ENCE, 
                        team2: "SRPeakCheck", 
                        team2Logo: SRPC, 
                        score1: 3, 
                        score2: 2, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group B" 
                    },
                    { 
                        id: 4, 
                        region: "EMEA", 
                        team1: "Piece of Cake", 
                        team1Logo: PoC, 
                        team2: "A one man Army", 
                        team2Logo: AOMA, 
                        score1: 2, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group B" 
                    }
                ]
            },
            {
                id: 2,
                day: "SAT, AUG 10",
                matches: [
                    { 
                        id: 1, 
                        region: "NA", 
                        team1: "Toronto Defiant", 
                        team1Logo: TD, 
                        team2: "NTMR", 
                        team2Logo: NTMR, 
                        score1: 3, 
                        score2: 1, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 2, 
                        region: "NA", 
                        team1: "Citrus NTMR", 
                        team1Logo: CNTMR, 
                        team2: "Rad x Avidity", 
                        team2Logo: RxA, 
                        score1: 2, 
                        score2: 3, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 3, 
                        region: "NA", 
                        team1: "NRGShock", 
                        team1Logo: NRGS, 
                        team2: "TSM", 
                        team2Logo: TSM, 
                        score1: 3, 
                        score2: 1, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group D" 
                    },
                    { 
                        id: 4, 
                        region: "NA", 
                        team1: "Fluffydreamland", 
                        team1Logo: FluffyD, 
                        team2: "Shikigami", 
                        team2Logo: Shiki, 
                        score1: 2, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group D" 
                    }
                ]
            },
            {
                id: 3,
                day: "SUN, AUG 11",
                matches: [
                    { 
                        id: 1, 
                        region: "EMEA", 
                        team1: "Spacestation", 
                        team1Logo: SSG, 
                        team2: "Twisted Minds", 
                        team2Logo: TM, 
                        score1: 3, 
                        score2: 2, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 2, 
                        region: "EMEA", 
                        team1: "Virtus.Pro", 
                        team1Logo: VP, 
                        team2: "Quick Esports", 
                        team2Logo: QE, 
                        score1: 3, 
                        score2: 2, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 3, 
                        region: "EMEA", 
                        team1: "ENCE", 
                        team1Logo: ENCE, 
                        team2: "Piece of Cake", 
                        team2Logo: PoC, 
                        score1: 3, 
                        score2: 1, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group B" 
                    },
                    { 
                        id: 4, 
                        region: "EMEA", 
                        team1: "SRPeakCheck", 
                        team1Logo: SRPC, 
                        team2: "A one man Army", 
                        team2Logo: AOMA, 
                        score1: 1, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group B" 
                    }
                ]
            },
            {
                id: 4,
                day: "FRI, AUG 16",
                matches: [
                    { 
                        id: 1, 
                        region: "NA", 
                        team1: "Toronto Defiant", 
                        team1Logo: TD, 
                        team2: "Citrus NTMR", 
                        team2Logo: CNTMR, 
                        score1: 3, 
                        score2: 2, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 2, 
                        region: "NA", 
                        team1: "NTMR", 
                        team1Logo: NTMR, 
                        team2: "Rad x Avidity", 
                        team2Logo: RxA, 
                        score1: 3, 
                        score2: 0, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 3, 
                        region: "NA", 
                        team1: "NRGShock", 
                        team1Logo: NRGS, 
                        team2: "Fluffydreamland", 
                        team2Logo: FluffyD, 
                        score1: 3, 
                        score2: 1, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group D" 
                    },
                    { 
                        id: 4, 
                        region: "NA", 
                        team1: "TSM", 
                        team1Logo: TSM, 
                        team2: "Shikigami", 
                        team2Logo: Shiki, 
                        score1: 2, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group D" 
                    }
                ]
            },
            {
                id: 5,
                day: "SAT, AUG 17",
                matches: [
                    { 
                        id: 1, 
                        region: "EMEA", 
                        team1: "Spacestation", 
                        team1Logo: SSG, 
                        team2: "Quick Esports", 
                        team2Logo: QE, 
                        score1: 3, 
                        score2: 0, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 2, 
                        region: "EMEA", 
                        team1: "Virtus.Pro", 
                        team1Logo: VP, 
                        team2: "Twisted Minds", 
                        team2Logo: TM, 
                        score1: 2, 
                        score2: 3, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group A" 
                    },
                    { 
                        id: 3, 
                        region: "EMEA", 
                        team1: "ENCE", 
                        team1Logo: ENCE, 
                        team2: "A one man Army", 
                        team2Logo: AOMA, 
                        score1: 3, 
                        score2: 2, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group B" 
                    },
                    { 
                        id: 4, 
                        region: "EMEA", 
                        team1: "SRPeakCheck", 
                        team1Logo: SRPC, 
                        team2: "Piece of Cake", 
                        team2Logo: PoC, 
                        score1: 2, 
                        score2: 3, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group B" 
                    }
                ]
            },
            {
                id: 6,
                day: "SUN, AUG 18",
                matches: [
                    { 
                        id: 1, 
                        region: "NA", 
                        team1: "Toronto Defiant", 
                        team1Logo: TD, 
                        team2: "Rad x Avidity", 
                        team2Logo: RxA, 
                        score1: 3, 
                        score2: 1, 
                        date: "18:00", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 2, 
                        region: "NA", 
                        team1: "Citrus NTMR", 
                        team1Logo: CNTMR, 
                        team2: "NTMR", 
                        team2Logo: NTMR, 
                        score1: 1, 
                        score2: 3, 
                        date: "19:30", 
                        status: "completed", 
                        groupe: "Group C" 
                    },
                    { 
                        id: 3, 
                        region: "NA", 
                        team1: "NRGShock", 
                        team1Logo: NRGS, 
                        team2: "Shikigami", 
                        team2Logo: Shiki, 
                        score1: 3, 
                        score2: 1, 
                        date: "21:00", 
                        status: "completed", 
                        groupe: "Group D" 
                    },
                    { 
                        id: 4, 
                        region: "NA", 
                        team1: "TSM", 
                        team1Logo: TSM, 
                        team2: "Fluffydreamland", 
                        team2Logo: FluffyD, 
                        score1: 3, 
                        score2: 1, 
                        date: "22:30", 
                        status: "completed", 
                        groupe: "Group D" 
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        matchDays: [
            {
                id: 1,
                day: "FRI, 27 SEP",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Spacestation",
                        team1Logo: SSG,
                        team2: "SRPeakCheck",
                        team2Logo: SRPC,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "Quick Esports",
                        team1Logo: QE,
                        team2: "ENCE",
                        team2Logo: ENCE,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Toronto Defiant",
                        team1Logo: TD,
                        team2: "Citrus NTMR",
                        team2Logo: CNTMR,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "NRGShock",
                        team1Logo: NRGS,
                        team2: "Fluffydreamland",
                        team2Logo: FluffyD,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            },
            {
                id: 2,
                day: "SAT, 28 SEP",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Twisted Minds",
                        team1Logo: TM,
                        team2: "Virtus.Pro",
                        team2Logo: VP,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "Pice of Cake",
                        team1Logo: PoC,
                        team2: "A one man Army",
                        team2Logo: AOMA,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Rad x Avidity",
                        team1Logo: RxA,
                        team2: "NTMR",
                        team2Logo: NTMR,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "Shikigami",
                        team1Logo: Shiki,
                        team2: "TSM",
                        team2Logo: TSM,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            },
            {
                id: 3,
                day: "SUN, 29 SEP",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Spacestation",
                        team1Logo: SSG,
                        team2: "Twisted Minds",
                        team2Logo: TM,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "Quick Esports",
                        team1Logo: QE,
                        team2: "A one man Army",
                        team2Logo: AOMA,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Toronto Defiant",
                        team1Logo: TD,
                        team2: "NTMR",
                        team2Logo: NTMR,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "TSM",
                        team1Logo: TSM,
                        team2: "NRGShock",
                        team2Logo: NRGS,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            },
            {
                id: 4,
                day: "FRI, 4 OCT",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Virtus.Pro",
                        team1Logo: VP,
                        team2: "SRPeakCheck",
                        team2Logo: SRPC,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "ENCE",
                        team1Logo: ENCE,
                        team2: "Pice of Cake",
                        team2Logo: PoC,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Citrus NTMR",
                        team1Logo: CNTMR,
                        team2: "Rad x Avidity",
                        team2Logo: RxA,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "Fluffydreamland",
                        team1Logo: FluffyD,
                        team2: "Shikigami",
                        team2Logo: Shiki,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ] 
            },
            {
                id: 5,
                day: "SAT, 5 OCT",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Spacestation",
                        team1Logo: SSG,
                        team2: "Virtus.Pro",
                        team2Logo: VP,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "Quick Esports",
                        team1Logo: QE,
                        team2: "Pice of Cake",
                        team2Logo: PoC,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Toronto Defiant",
                        team1Logo: TD,
                        team2: "Rad x Avidity",
                        team2Logo: RxA,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "Shikigami",
                        team1Logo: Shiki,
                        team2: "NRGShock",
                        team2Logo: NRGS,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            },
            {
                id: 6,
                day: "SUN, 5 OCT",
                matches:[
                    {
                        id: 1,
                        region: "EMEA",
                        team1: "Twisted Minds",
                        team1Logo: TM,
                        team2: "SRPeakCheck",
                        team2Logo: SRPC,
                        score1: 3,
                        score2: 2,
                        date: "18:00",
                        status: "completed",
                        groupe: "Group A"
                    },
                    {
                        id: 2,
                        region: "EMEA",
                        team1: "ENCE",
                        team1Logo: ENCE,
                        team2: "A one man Army",
                        team2Logo: AOMA,
                        score1: 1,
                        score2: 3,
                        date: "19:30",
                        status: "completed",
                        groupe: "Group B"
                    },
                    {
                        id: 3,
                        region: "NA",
                        team1: "Citrus NTMR",
                        team1Logo: CNTMR,
                        team2: "NTMR",
                        team2Logo: NTMR,
                        score1: 3,
                        score2: 2,
                        date: "21:00",
                        status: "completed",
                        groupe: "Group C"
                    },
                    {
                        id: 4,
                        region: "NA",
                        team1: "Fluffydreamland",
                        team1Logo: FluffyD,
                        team2: "TSM",
                        team2Logo: TSM,
                        score1: 3,
                        score2: 0,
                        date: "22:30",
                        status: "completed",
                        groupe: "Group D"
                    }
                ]
            }
        ]
    }
];

const MainStageData = [
    { 
        id:2, 
        phases: [
            {id: 1, name: "Round 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "3", score2: "0", team1: "Spacestation",   team1logo: SSG, team2: "Shikigami",      team2logo: Shiki},
                {id: 2, score1: "3", score2: "1", team1: "ENCE",           team1logo: ENCE, team2: "NTMR",          team2logo: NTMR},
                {id: 3, score1: "2", score2: "3", team1: "Twisted Minds",  team1logo: TM, team2: "Toronto Defiant", team2logo: TD},
                {id: 4, score1: "0", score2: "3", team1: "A one man Army", team1logo: AOMA, team2: "NRGShock",      team2logo: NRGS}
            ]},
            {id: 2, name: "Loser 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "3", score2: "2", team1: "Shikigami", team1logo: Shiki, team2: "A one man Army", team2logo: AOMA},
                {id: 2, score1: "0", score2: "3", team1: "NTMR",      team1logo: NTMR,  team2: "Twisted Minds",  team2logo: TM}
            ]},
            {id: 3, name: "Winner 1", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "3", score2: "0", team1: "Spacestation",    team1logo: SSG, team2: "ENCE",     team2logo: ENCE},
                {id: 2, score1: "3", score2: "2", team1: "Toronto Defiant", team1logo: TD,  team2: "NRGShock", team2logo: NRGS}
            ]},
            {id: 4, name: "Loser 2", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "0", score2: "3", team1: "Shikigami",     team1logo: Shiki, team2: "ENCE",     team2logo: ENCE},
                {id: 1, score1: "3", score2: "2", team1: "Twisted Minds", team1logo: TM,    team2: "NRGShock", team2logo: NRGS}
            ]},
            {id: 5, name: "Loser 3", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "2", score2: "3", team1: "ENCE", team1logo: ENCE, team2: "Twisted Minds", team2logo: TM}
            ]},
            {id: 6, name: "Winner Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "2", score2: "3", team1: "Spacestation", team1logo: SSG, team2: "Toronto Defiant", team2logo: TD}
            ]},
            {id: 7, name: "Loser Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "3", score2: "1", team1: "Spacestation", team1logo: SSG, team2: "Twisted Minds", team2logo: TM}
            ]},
            {id: 8, name: "Grand Finals", day: "Sunday",   date: "MAR 3", matches: [
                {id: 1, score1: "4", score2: "2", team1: "Toronto Defiant", team1logo: TD, team2: "Spacestation", team2logo: SSG}
            ]},
    ]},
    { 
        id:4, 
        phases: [
            {id: 1, name: "Round 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "3", score2: "2", team1: "Spacestation",   team1logo: SSG,  team2: "Fluffy Dreamland", team2logo: FluffyD},
                {id: 2, score1: "2", score2: "3", team1: "A one man Army", team1logo: AOMA, team2: "Citrus NTMR",      team2logo: CNTMR},
                {id: 3, score1: "3", score2: "0", team1: "Twisted Minds",  team1logo: TM,   team2: "Shikigami",        team2logo: Shiki},
                {id: 4, score1: "0", score2: "3", team1: "Pice of Cake",   team1logo: PoC,  team2: "Toronto Defiant",  team2logo: TD}
            ]},
            {id: 2, name: "Loser 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "1", score2: "3", team1: "Fluffy Dreamland", team1logo: FluffyD, team2: "Pice of Cake", team2logo: PoC},
                {id: 2, score1: "3", score2: "2", team1: "A one man Army",   team1logo: AOMA,    team2: "Shikigami",    team2logo: Shiki}
            ]},
            {id: 3, name: "Winner 1", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "2", score2: "3", team1: "Spacestation",  team1logo: SSG, team2: "Citrus NTMR",     team2logo: CNTMR},
                {id: 2, score1: "1", score2: "3", team1: "Twisted Minds", team1logo: TM,  team2: "Toronto Defiant", team2logo: TD}
            ]},
            {id: 4, name: "Loser 2", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "1", score2: "3", team1: "Pice of Cake", team1logo: PoC, team2: "Spacestation", team2logo: SSG},
                {id: 2, score1: "0", score2: "3", team1: "A one Man Army", team1logo: AOMA, team2: "Twisted Minds", team2logo: TM}
            ]},
            {id: 5, name: "Loser 3", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "2", score2: "3", team1: "Spacestation", team1logo: SSG, team2: "Twisted Minds", team2logo: TM}
            ]},
            {id: 6, name: "Winner Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "0", score2: "3", team1: "Citrus NTMR", team1logo: CNTMR, team2: "Toronto Defiant", team2logo: TD}
            ]},
            {id: 7, name: "Loser Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "2", score2: "3", team1: "Twisted Minds", team1logo: TM, team2: "Citrus NTMR", team2logo: CNTMR}
            ]},
            {id: 8, name: "Grand Finals", day: "Sunday",   date: "MAR 3", matches: [
                {id: 1, score1: "4", score2: "1", team1: "Toronto Defiant", team1logo: TD, team2: "Citrus NTMR", team2logo: CNTMR}
            ]}
    ]},
    { 
        id:5, 
        phases: [
            {id: 1, name: "Round 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH},
                {id: 2, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH},
                {id: 3, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH},
                {id: 4, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH}
            ]},
            {id: 2, name: "Loser 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH},
                {id: 2, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH}
            ]},
            {id: 3, name: "Winner 1", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH},
                {id: 2, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH}
            ]},
            {id: 4, name: "Loser 2", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH},
                {id: 2, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH}
            ]},
            {id: 5, name: "Loser 3", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH}
            ]},
            {id: 6, name: "Winner Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH}
            ]},
            {id: 7, name: "Loser Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH}
            ]},
            {id: 8, name: "Grand Finals", day: "Sunday",   date: "MAR 3", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Team1", team1logo: PH, team2: "Team2", team2logo: PH}
            ]}
    ]},
    { 
        id:7, 
        phases: [
            {id: 1, name: "Round 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "3", score2: "0", team1: "Spacestation",   team1logo: SSG, team2: "Shikigami",      team2logo: Shiki},
                {id: 2, score1: "3", score2: "1", team1: "ENCE",           team1logo: ENCE, team2: "NTMR",          team2logo: NTMR},
                {id: 3, score1: "2", score2: "3", team1: "Twisted Minds",  team1logo: TM, team2: "Toronto Defiant", team2logo: TD},
                {id: 4, score1: "0", score2: "3", team1: "A one man Army", team1logo: AOMA, team2: "NRGShock",      team2logo: NRGS}
            ]},
            {id: 2, name: "Loser 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "3", score2: "2", team1: "Shikigami", team1logo: Shiki, team2: "A one man Army", team2logo: AOMA},
                {id: 2, score1: "0", score2: "3", team1: "NTMR",      team1logo: NTMR,  team2: "Twisted Minds",  team2logo: TM}
            ]},
            {id: 3, name: "Winner 1", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "3", score2: "0", team1: "Spacestation",    team1logo: SSG, team2: "ENCE",     team2logo: ENCE},
                {id: 2, score1: "3", score2: "2", team1: "Toronto Defiant", team1logo: TD,  team2: "NRGShock", team2logo: NRGS}
            ]},
            {id: 4, name: "Loser 2", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "0", score2: "3", team1: "Shikigami",     team1logo: Shiki, team2: "ENCE",     team2logo: ENCE},
                {id: 1, score1: "3", score2: "2", team1: "Twisted Minds", team1logo: TM,    team2: "NRGShock", team2logo: NRGS}
            ]},
            {id: 5, name: "Loser 3", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "2", score2: "3", team1: "ENCE", team1logo: ENCE, team2: "Twisted Minds", team2logo: TM}
            ]},
            {id: 6, name: "Winner Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "2", score2: "3", team1: "Spacestation", team1logo: SSG, team2: "Toronto Defiant", team2logo: TD}
            ]},
            {id: 7, name: "Loser Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "3", score2: "1", team1: "Spacestation", team1logo: SSG, team2: "Twisted Minds", team2logo: TM}
            ]},
            {id: 8, name: "Grand Finals", day: "Sunday",   date: "MAR 3", matches: [
                {id: 1, score1: "1", score2: "4", team1: "Toronto Defiant", team1logo: TD, team2: "Spacestation", team2logo: SSG}
            ]},
    ]},
    { 
        id:9, 
        phases: [
            {id: 1, name: "Round 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "3", score2: "2", team1: "Spacestation",   team1logo: SSG,  team2: "Fluffy Dreamland", team2logo: FluffyD},
                {id: 2, score1: "2", score2: "3", team1: "A one man Army", team1logo: AOMA, team2: "Citrus NTMR",      team2logo: CNTMR},
                {id: 3, score1: "3", score2: "0", team1: "Twisted Minds",  team1logo: TM,   team2: "Shikigami",        team2logo: Shiki},
                {id: 4, score1: "0", score2: "3", team1: "Pice of Cake",   team1logo: PoC,  team2: "Toronto Defiant",  team2logo: TD}
            ]},
            {id: 2, name: "Loser 1", day: "Thursday", date: "FEB 29", matches: [
                {id: 1, score1: "1", score2: "3", team1: "Fluffy Dreamland", team1logo: FluffyD, team2: "Pice of Cake", team2logo: PoC},
                {id: 2, score1: "3", score2: "2", team1: "A one man Army",   team1logo: AOMA,    team2: "Shikigami",    team2logo: Shiki}
            ]},
            {id: 3, name: "Winner 1", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "2", score2: "3", team1: "Spacestation",  team1logo: SSG, team2: "Citrus NTMR",     team2logo: CNTMR},
                {id: 2, score1: "1", score2: "3", team1: "Twisted Minds", team1logo: TM,  team2: "Toronto Defiant", team2logo: TD}
            ]},
            {id: 4, name: "Loser 2", day: "Friday",   date: "MAR 1", matches: [
                {id: 1, score1: "1", score2: "3", team1: "Pice of Cake", team1logo: PoC, team2: "Spacestation", team2logo: SSG},
                {id: 2, score1: "0", score2: "3", team1: "A one Man Army", team1logo: AOMA, team2: "Twisted Minds", team2logo: TM}
            ]},
            {id: 5, name: "Loser 3", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "2", score2: "3", team1: "Spacestation", team1logo: SSG, team2: "Twisted Minds", team2logo: TM}
            ]},
            {id: 6, name: "Winner Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "0", score2: "3", team1: "Citrus NTMR", team1logo: CNTMR, team2: "Toronto Defiant", team2logo: TD}
            ]},
            {id: 7, name: "Loser Finals", day: "Saturday", date: "MAR 2", matches: [
                {id: 1, score1: "2", score2: "3", team1: "Twisted Minds", team1logo: TM, team2: "Citrus NTMR", team2logo: CNTMR}
            ]},
            {id: 8, name: "Grand Finals", day: "Sunday",   date: "MAR 3", matches: [
                {id: 1, score1: "4", score2: "1", team1: "Toronto Defiant", team1logo: TD, team2: "Citrus NTMR", team2logo: CNTMR}
            ]}
    ]},
    { 
        id:10, 
        phases: [
            {id: 1, name: "Round 1", day: "Thursday", date: "NOV 21", matches: [
                {id: 1, score1: "-", score2: "-", team1: "EMEA Seat 1", team1logo: PH, team2: "NA Seat 4", team2logo: PH},
                {id: 2, score1: "-", score2: "-", team1: "EMEA Seat 2", team1logo: PH, team2: "NA Seat 3", team2logo: PH},
                {id: 3, score1: "-", score2: "-", team1: "EMEA Seat 3", team1logo: PH, team2: "NA Seat 2", team2logo: PH},
                {id: 4, score1: "-", score2: "-", team1: "EMEA Seat 4", team1logo: PH, team2: "NA Seat 1", team2logo: PH}
            ]},
            {id: 2, name: "Loser 1", day: "Thursday", date: "NOV 21", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Loser G1", team1logo: PH, team2: "Loser G3", team2logo: PH},
                {id: 2, score1: "-", score2: "-", team1: "Loser G2", team1logo: PH, team2: "Loser G4", team2logo: PH}
            ]},
            {id: 3, name: "Winner 1", day: "Friday",   date: "NOV 22", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Winner G1", team1logo: PH, team2: "Winner G2", team2logo: PH},
                {id: 2, score1: "-", score2: "-", team1: "Winner G3", team1logo: PH, team2: "Winner G4", team2logo: PH}
            ]},
            {id: 4, name: "Loser 2", day: "Friday",   date: "NOV 22", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Winner G5", team1logo: PH, team2: "Loser G7", team2logo: PH},
                {id: 2, score1: "-", score2: "-", team1: "Winner G6", team1logo: PH, team2: "Loser G8", team2logo: PH}
            ]},
            {id: 5, name: "Loser 3", day: "Saturday", date: "NOV 23", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Winner G9", team1logo: PH, team2: "Winner G10", team2logo: PH}
            ]},
            {id: 6, name: "Winner Finals", day: "Saturday", date: "NOV 23", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Winner G7", team1logo: PH, team2: "Winner G8", team2logo: PH}
            ]},
            {id: 7, name: "Loser Finals", day: "Saturday", date: "NOV 23", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Winner G11", team1logo: PH, team2: "Loser G12", team2logo: PH}
            ]},
            {id: 8, name: "Grand Finals", day: "Sunday",   date: "NOV 24", matches: [
                {id: 1, score1: "-", score2: "-", team1: "Winner G12", team1logo: PH, team2: "Winner G13", team2logo: PH}
            ]}
    ]},
]



export default function Schedule() {
    const [activeTab, setActiveTab] = React.useState("ALL");
    const [currentStage, setCurrentStage] = React.useState(Stages[0]);

    const stageTabs = Stages.map((stage) => (
        <StageCard
            key={stage.id}
            id={stage.id}
            stage={stage.stage}
            stageType={stage.stageType}
            stageDate={stage.stageDate}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            Stages={Stages}
            setActiveTab={setActiveTab}
        />
    ));
    
    const groupStageElement = currentStage.stageType==="Groupe Stage"? StageData.find(stage => stage.id === currentStage.id).matchDays.map((day) =>{
        return(
            <GroupeStage
                key={day.id}
                day={day.day}
                matches={day.matches}
            />
        )
    }):
    <></>;
    const emeaMatches = currentStage.stageType==="Groupe Stage"? StageData.find(stage => stage.id === currentStage.id).matchDays.map((day) => {
        const filteredMatches = day.matches.filter(match => match.region === "EMEA");
        return (
            <GroupeStage
                key={day.id}
                day={day.day}
                matches={filteredMatches}
            />
        );
    }):
    <></>;
    const naMatches = currentStage.stageType==="Groupe Stage"? StageData.find(stage => stage.id === currentStage.id).matchDays.map((day) => {
        const filteredMatches = day.matches.filter(match => match.region === "NA");
        return (
            <GroupeStage
                key={day.id}
                day={day.day}
                matches={filteredMatches}
            />
        );
    }):
    <></>;

    const mainEventElement = currentStage.stageType==="Main Event"? <MainStage phases={MainStageData.find(stage => stage.id === currentStage.id).phases} />:<></>;

    return (
        <div className="page schedule">
            <div className="stage-selection">
                {stageTabs}
            </div>
            {currentStage.stageType === "Groupe Stage" ?
            <div className="tabs-container">
                <div onClick={() => setActiveTab("ALL")} className={activeTab === "ALL" ? "tab active" : "tab"}>
                    <img src={activeTab === "ALL" ? EarthGlobeBlack : EarthGlobe} alt="Europe" />
                    <span>ALL</span>
                </div>
                <div onClick={() => setActiveTab("NA")} className={activeTab === "NA" ? "tab active" : "tab"}>
                    <img src={activeTab === "NA" ? AmericaGlobeBlack : AmericaGlobe} alt="America" />
                    <span>NA</span>
                </div>
                <div onClick={() => setActiveTab("EU")} className={activeTab === "EU" ? "tab active" : "tab"}>
                    <img src={activeTab === "EU" ? EuropeGlobeBlack : EuropeGlobe} alt="Europe" />
                    <span>EMEA</span>
                </div>
            </div>
            :null}
            <div className="schedule-container">
                {currentStage.stageType === "Groupe Stage"?
                    activeTab === "ALL" ? groupStageElement : activeTab === "NA" ? naMatches : emeaMatches
                    :
                    mainEventElement   
                }
            </div>
        </div>
    );
}