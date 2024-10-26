import React from "react";
import { NavLink } from 'react-router-dom';

import '../css/news.css';
import ArticleCard from "../components/ArticleCard";

import ArticleImg1 from '../img/articleImg/DALL·E 2024-10-25 13.14.48 - An exciting digital illustration representing the Overwatch League 2024 season kickoff, featuring dynamic gameplay, colorful team logos, and enthusias.webp';
import ArticleImg2 from '../img/articleImg/DALL·E 2024-10-25 13.15.11 - A vibrant digital artwork depicting new heroes in Overwatch 2, showcasing their unique abilities and designs in an action-packed setting with O.webp';
import ArticleImg3 from '../img/articleImg/DALL·E 2024-10-25 13.15.14 - A dynamic digital illustration of top plays from an Overwatch tournament, featuring professional players in intense action, showcasing unique c.webp';

// generiert von ChatGPT prompt:
// kannst du mir beispiels daten generieren nach diesen muster:
// const articleCardData = [
//     {id: 0, title: "", description: "", date: ""}
// ]
// die beispiel artikle sollen auf der webseite der Overwatch Esport seite passen
const articleCardData = [
    {id: 1, img: ArticleImg1, title: "Overwatch League 2024: Season Kickoff", description: "Join us as we kick off the new season of the Overwatch League with thrilling matches and top teams competing for glory.", date: "2024-02-15"},
    {id: 2, img: ArticleImg2, title: "New Heroes Coming to Overwatch 2", description: "Get ready for new heroes in Overwatch 2! Discover the unique abilities and lore behind our latest characters.", date: "2024-03-10"},
    {id: 3, img: ArticleImg3, title: "Top Plays from the Last Tournament", description: "Relive the best plays from the latest Overwatch tournament! Watch the highlights and incredible moments from top players.", date: "2024-01-20"},
    {id: 4, img: ArticleImg1, title: "Patch Notes: Balance Changes", description: "Check out the latest patch notes for balance changes that will affect the meta in the upcoming matches.", date: "2024-01-25"},
    {id: 5, img: ArticleImg2, title: "Interview with Pro Player Backbone", description: "We sit down with one of the top pro players to discuss their journey, strategies, and thoughts on the current season.", date: "2024-02-05"},
    {id: 6, img: ArticleImg3, title: "Overwatch Esport Event Highlights", description: "Catch up on the highlights from the latest Overwatch Esport events, including player interviews and fan reactions.", date: "2024-03-15"},
    {id: 7, img: ArticleImg1, title: "Community Tournament Announcement", description: "Join our upcoming community tournament for a chance to win great prizes and showcase your skills.", date: "2024-02-22"},
    {id: 8, img: ArticleImg2, title: "Looking Back on History: The 2018 Champions", description: "Dive into the exciting History of Overwatch Esports as we take a look back at the 2018 Champions London Spitfire.", date: "2024-01-30"},
    {id: 9, img: ArticleImg3, title: "Guide to Playing New Heroes", description: "Learn how to master the new heroes introduced in Overwatch 2 with our detailed guides and tips.", date: "2024-03-05"}
];


export default function News() {

    const articleCards = articleCardData.map((article) => (
        <NavLink key={article.id} to={`/news/article/${article.id}`}>
            <ArticleCard key={article.id} img={article.img} title={article.title} description={article.description} date={article.date} />
        </NavLink>
    ));
    return (
        <div className="page news">
            <div className="news-header">
                <div className="skewed-container"><div className="unskew"><span>Latest</span></div></div>
                <h1>News</h1>
            </div>
            <div className="articles-container">
                {articleCards}
            </div>
            <div className="news-footer">
                <div className="contact-us">
                    <span>Got any questions?</span>
                    <h2>Get in touch!</h2>
                    <p>Reach out to us on Social Media with any questions.</p>
                    <div className="social-buttons">
                        <button><a href="">Visit us on X</a></button>
                        <button><a href="">Join us on Discord</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}