import React from "react";

export default function StageCard(props) {
    function setActiveStageCard(){
        props.setCurrentStage(props.Stages[props.id - 1]);
        props.setActiveTab("ALL");
    }
    return(
        <div className={props.currentStage.id === props.id ? "stage-card active" : "stage-card"} onClick={setActiveStageCard}>
            <span className="stage">{props.stage}</span>
            <span className="stage-type">{props.stageType}</span>
            <span className="stage-date">{props.stageDate}</span>
        </div>
    )
}