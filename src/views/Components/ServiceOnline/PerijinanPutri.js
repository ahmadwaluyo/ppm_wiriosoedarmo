import React from 'react';
// import '../../components/styles/PerijinanPutri.css';

export default function PerijinanPutri() {
    return (
        <div className="wrapper col-md-12">

            <div className="underline"><strong>All Games<span>( 4 )</span></strong></div>

            <div className="cards">

                <figure className="card">

                    <img alt="img" src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" />

                    <figcaption>Dota 2</figcaption>

                </figure>

                <figure className="card">

                    <img alt="img" src="https://mrreiha.keybase.pub/codepen/hover-fx/2.jpg" />

                    <figcaption>Stick Fight</figcaption>

                </figure>

                <figure className="card">

                    <img alt="img" src="https://mrreiha.keybase.pub/codepen/hover-fx/3.jpg" />

                    <figcaption>Minion Masters</figcaption>

                </figure>

                <figure className="card">

                    <img alt="img" src="https://mrreiha.keybase.pub/codepen/hover-fx/4.jpg" />

                    <figcaption>KoseBoz!</figcaption>

                </figure>

            </div>

            <div className="underline"><strong>What's new?</strong></div>

            <div className="news2">

                <figure className="article">

                    <img alt="img" src="https://mrreiha.keybase.pub/codepen/hover-fx/news1.jpg" />

                    <figcaption>

                        <h3>New Item</h3>

                        <p>

                            In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.

                        </p>

                    </figcaption>

                </figure>

                <figure className="article">

                    <img alt="img" src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png" />

                    <figcaption>

                        <h3>Update</h3>

                        <p>

                            Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.

                        </p>

                    </figcaption>

                </figure>

            </div>

        </div>
    )
}