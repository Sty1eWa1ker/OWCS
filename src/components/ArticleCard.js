import React from "react";

import '../css/article-card.css';

export default function ArticleCard(props) {
    return(
        <div className="article-card">
            <div className="article-card-image">
                <img src={props.img} alt="Article" />
            </div>
            <div className="article-card-title">
                <h3>{props.title}</h3>
            </div>
            <div className="article-card-description">
                <p>{props.description}</p>
            </div>
            <div className="article-card-date">
                <p>{props.date}</p>
            </div>
        </div>
    )
}