import React from "react";

import '../css/article-page.css';

export default function ArticlePage(props) {
    const pharagraphs = props.article.pharagraphs.map((p, index) => 
    (
    <section>
        <h3>{p.title}</h3>
        <p key={index}>{p.text}</p>
    </section>));
    return (
        <article className="page article-page">
            <h1>{props.article.title}</h1>
            <div className="article-date">
                <p>{props.article.date}</p>
            </div>
            {pharagraphs}
        </article>
    );
}