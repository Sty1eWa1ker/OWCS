import React from "react";

import AmericaGlobe from "../img/icons/earthAmerica.svg";
import AmericaGlobeBlack from "../img/icons/earthAmericsBlack.svg";
import EuropeGlobe from "../img/icons/earthEurope.svg";
import EuropeGlobeBlack from "../img/icons/earthEuropeBlack.svg";

export default function Schedule() {
    const [activeTab, setActiveTab] = React.useState("NA");
    return (
        <div className="page">
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
        </div>
    );
}