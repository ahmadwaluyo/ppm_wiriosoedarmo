import React from "react";
import { Link } from "react-router-dom";
import "./News.css";

export default function News () {
    return (
        <main className="main">
        <div className="title">
            <h1 className="title__h1"><span>Resources</span> for Humans</h1>
            <p className="title__sub">LATTICE RESOURCES FOR HUMANS MAGAZINE</p>
        </div>

        <nav className="nav__page">
            <Link to="/" className="nav__page__link">Company Culture</Link>
            <Link to="/" className="nav__page__link">Employee Engagement</Link>
            <Link to="/" className="nav__page__link">Employee Feedback</Link>
            <Link to="/" className="nav__page__link">Performance Management</Link>
            <Link to="/" className="nav__page__link">Performance Reviews</Link>
        </nav>

        <article className="grid">
            <section className="grid__col-2">
                <div className="grid__item-lg">
                    <img src="https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="..." className="grid__item__img" />
                    <p className="grid__item__category">Managing People</p>
                    <h3 className="grid__item__title">Like a Boss: "I have to have my first tough conversation with an employee who's underperforming."</h3>
                    <p className="grid__item__author">By Jennifer Romolini</p>
                </div>
                <div>
                    <h3 className="grid__col__title">Spotlight</h3>
                    <div className="grid__item-sm">
                        <div>
                            <p className="grid__item__category">Employee Feedback</p>
                            {/* <h4 className="grid__item__title" onClick={history.push({ pathname: "/news/:id"})}>How to Ask Your Manager for Feedback</h4> */}
                            <Link to="/news/:id"><h4 className="grid__item__title">How to Ask Your Manager for Feedback</h4></Link>
                            <p className="grid__item__author">By Annette Cardwell</p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="..." className="grid__item__img" />
                        </div>
                    </div>
                    <div className="grid__item-sm">
                        
                        <div>
                            <p className="grid__item__category">Performance Reviews</p>
                            <Link to="/news/:id"><h4 className="grid__item__title">HR's Guide to Performance Review Questions</h4></Link>
                            <p className="grid__item__author">By Annette Cardwell</p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1564424555153-04228f0aa7ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="..." className="grid__item__img" />
                        </div>
                    </div>
                    <div className="grid__item- form">
                        <h4 className="form__title">Sign up for our Newsletter for Humans</h4>
                        <div className="form__fields">
                            <input type="email" className="form__input" placeholder="Email address" />
                            <input type="submit" value="Sign up" className="form__submit" />
                        </div>
                    </div>
                </div>
            </section>
            <h3 className="grid__col__title">Interviews</h3>
            <section className="grid__col-3">
            <div className="grid__item-md">
                <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="..." className="grid__item__img" />
                <p className="grid__item__category">Performance Reviews</p>
                <Link to="/news/:id"><h4 className="grid__item__title">How to Get More Out of Your Performance Review Data</h4></Link>
                <p className="grid__item__author">By Annette Cardwell</p>
            </div>
            <div className="grid__item-md">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="..." className="grid__item__img" />
                <p className="grid__item__category">Company Culture</p>
                <Link to="/news/:id"><h4 className="grid__item__title">Are Companies Ready for a 4-Day Workweek?</h4></Link>
                <p className="grid__item__author">By Jennifer Romolini</p>
            </div>
            <div className="grid__item-md">
                <img src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="..." className="grid__item__img" />
                <p className="grid__item__category">Employee Feedback</p>
                <Link to="/news/:id"><h4 className="grid__item__title">7 Signs Your Employees Are Job Hunting (And How to Address Them)</h4></Link>
                <p className="grid__item__author">By Deanna deBara</p>
            </div>
            </section>
        </article>
        </main>
    )
}