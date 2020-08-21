import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./DetailArticle.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));


export default function ArticleCard(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main>
        <br />
          <h1 className="h1">Fusce Vestibulum Mauris a Tortor Faucibus Sagittis</h1>
          <p className="teaser">Cras massa dui, posuere id dolor nec, rutrum malesuada metus. Integer sed arcu velit.</p>
          <figure className="hero-figure">
            <img src="https://picsum.photos/1280/720" alt="..." />
            <figcaption>Credit: Lorem Picsum</figcaption>
          </figure>
          <div className="article-meta">
            <img src="https://picsum.photos/200/200" alt="Author" />
            <div className="meta-data">
            <span className="meta-author">Jake</span><br />
            <span className="meta-date">August 30, 2019</span>
            </div>
            <hr />
          </div>
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas turpis felis, faucibus a leo vel, semper bibendum velit.</p>
          <p className="p">Donec efficitur finibus orci finibus condimentum. Etiam at congue mattis. Cras vehicula commodo dapibus. Praesent vitae velit aliquam, porta nisl pharetra, ultricies mi. Ut odio purus, laoreet at dolor vel, porttitor efficitur tellus.</p>
          <blockquote>Nam lacinia justo ac mi mattis porttitor commodo id felis. Etiam et ipsum felis. Phasellus at magna placerat sem scelerisque commodo vel eu risus.<cite>Abrams</cite></blockquote>
          <p className="p">Sed blandit eros in bibendum tempor. Morbi euismod hendrerit est, quis gravida leo rutrum a. Sed interdum lectus in mollis consequat. Donec eu lacinia massa, in lacinia enim. Suspendisse imperdiet lorem ac facilisis eleifend.</p>
          <h2 style={{ paddingLeft: 50 }}>Curabitur Orci Magna</h2>
          <p className="p">Fusce vestibulum mauris a tortor faucibus sagittis. <a href="#" alt="..." target="_blank"><span>Integer leo augue,</span></a> accumsan at arcu ac, pharetra ullamcorper augue. Vivamus vel sollicitudin tellus. Cras vestibulum, massa sit amet aliquet sodales, ligula augue pellentesque quam, quis interdum erat ante euismod ligula. Nunc tristique lectus id nulla venenatis dictum.</p>
          <ul className="ul">
            <li className="li">Donec efficitur finibus orci finibus condimentum</li>
            <li className="li">Sed blandit eros in bibendum tempor</li>
            <li className="li">Nunc tristique lectus id nulla venenatis dictum</li>
          </ul>
          <p className="p">Cras massa dui, posuere id dolor nec, rutrum malesuada metus. Integer sed arcu velit.</p>
          <div className="meta-bio">
            <div style={{ paddingLeft: 20 }}>
              <img src="https://picsum.photos/200/200" alt="" />
              <div className="bio-text">
                <p className="bio-shl">Author</p> 
                <p className="bio-hl">Jake</p> 
                <p className="p">Great at nothing. Pretty okay at a lot of things.</p>
              </div>
            </div>
          </div>
          <div className="full-width-btn"><a href="#" alt="...">See responses (35)</a></div>
          <div className="prefooter">
            <p className="section-hl">More Reading ...</p>
            <div className="foot-block">
              <div>
              <img src="https://picsum.photos/1200/820" alt="" />
              <h4 className="h4">Headline</h4>
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="p"><a href="#" alt="...">Continue reading...</a></p>
              </div>
            </div>
            <div className="foot-block">
              <div>
                <img src="https://picsum.photos/1380/960" alt="" />
                <h4 className="h4">Headline</h4>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="p"><a href="#" alt="...">Continue reading...</a></p>
              </div>
            </div>
            <div className="foot-block">
              <div>
                <img src="https://picsum.photos/800/620" alt="" />
                <h4 className="h4">Headline</h4>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="p"><a href="#" alt="...">Continue reading...</a></p>
              </div>
            </div>
            <div className="foot-block">
              <div>
                <img src="https://picsum.photos/800/620" alt="" />
                <h4 className="h4">Headline</h4>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="p"><a href="#" alt="...">Continue reading...</a></p>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
