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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main>
        <br />
        <h1 className="h1">MENERIMA WAKAF AL QURAN</h1>
          <p className="teaser">PM Wiriosoedarmo Muhammadiyah Gombong menerima wakaf al Quran dari seorang aghnia sejumlah 100 eksemplar.</p>
          <figure className="hero-figure">
            <img src={require("assets/img/news_img/waqaf.jpeg")} alt="..." />
            <figcaption>Credit: Lorem Picsum</figcaption>
          </figure>
          <div className="article-meta">
            <img src="https://picsum.photos/200/200" alt="Author" />
            <div className="meta-data">
            <span className="meta-author">Admin</span><br />
            <span className="meta-date">August 30, 2019</span>
            </div>
            <hr />
            <p className="p">Pesantren Wiriosoedarmo Muhammadiyah Gombong menerima wakaf al Quran dari seorang aghnia sejumlah 100 eksemplar.</p>
            <p className="p">Bagi santri, Al Quran ini akan sangat bermanfaat terutama untuk tahfidz anak-anak yang rutin diselenggarakan pada pagi hari ba’da shalat Subuh.</p>
            <blockquote>Saat ini sudah ada 5 santri dari 116 santri yang sudah hafidz al Quran 30 juz. Ada puluhan yang sudah hafal di atas 25 juz dan rata-rata di bawah 10 juz. <cite>Abrams</cite></blockquote>
            <p className="p">Tahfidzul Quran merupakan salah satu program unggulan di Pesantren Modern Wiriosoedarmo Muhammadiyah Gombong.</p>
            <p className="p">Oleh karenanya bantuan dari para aghnia ini akan sangat dirasa manfaatnya, dan terlebih dapat menjadi amal jariyah seiring digunakan untuk sarana ibadah oleh para santri.</p>
            <br />
            <br />
            <p className="p">Untuk informasi wakaf, hubungi : <span role="img" aria-label="...">📲</span>  0813 2745 5703</p>
            <br />
          </div>
          {/* <h1 className="h1">Fusce Vestibulum Mauris a Tortor Faucibus Sagittis</h1>
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
          <p className="p">Fusce vestibulum mauris a tortor faucibus sagittis. <span>Integer leo augue,</span> accumsan at arcu ac, pharetra ullamcorper augue. Vivamus vel sollicitudin tellus. Cras vestibulum, massa sit amet aliquet sodales, ligula augue pellentesque quam, quis interdum erat ante euismod ligula. Nunc tristique lectus id nulla venenatis dictum.</p>
          <ul className="ul">
            <li className="li">Donec efficitur finibus orci finibus condimentum</li>
            <li className="li">Sed blandit eros in bibendum tempor</li>
            <li className="li">Nunc tristique lectus id nulla venenatis dictum</li>
          </ul>
          <p className="p">Cras massa dui, posuere id dolor nec, rutrum malesuada metus. Integer sed arcu velit.</p> */}
          <div className="meta-bio">
            <div style={{ paddingLeft: 20 }}>
              <img src="https://picsum.photos/200/200" alt="" />
              <div className="bio-text">
                <p className="bio-shl">Author</p> 
                <p className="bio-hl">Admin</p> 
                <p className="p">Great at nothing. Pretty okay at a lot of things.</p>
              </div>
            </div>
          </div>
          <div className="full-width-btn">See responses (35)</div>
          <div className="prefooter">
            <p className="section-hl">More Reading ...</p>
            <div className="foot-block">
              <div>
              <img src="https://picsum.photos/1200/820" alt="" />
              <h4 className="h4">Headline</h4>
              <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="p">Continue reading...</p>
              </div>
            </div>
            <div className="foot-block">
              <div>
                <img src="https://picsum.photos/1380/960" alt="" />
                <h4 className="h4">Headline</h4>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="p">Continue reading...</p>
              </div>
            </div>
            <div className="foot-block">
              <div>
                <img src="https://picsum.photos/800/620" alt="" />
                <h4 className="h4">Headline</h4>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="p">Continue reading...</p>
              </div>
            </div>
            <div className="foot-block">
              <div>
                <img src="https://picsum.photos/800/620" alt="" />
                <h4 className="h4">Headline</h4>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="p">Continue reading...</p>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
