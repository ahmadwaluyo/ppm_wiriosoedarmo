import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa'
import * as $ from 'jquery';
import '../styles/HomeStyle.css';

export default function Navbar () {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

      $(function() {
        //caches a jQuery object containing the header element
        var header = $('.mainnav');
        $(window).scroll(function() {
           var scroll = $(window).scrollTop();
           if (scroll >= header.height()) {
             header.fadeOut("slow");
           } else {
             header.fadeIn("slow");
           }
        });
    });

    return (
        <div className="mainnav">
          <Contact />
          <nav className="topnav" id="myTopnav">
              <Link to="/" className="title left pl-5 mr-auto p-3">
                <img src={require('../images/wiriosoedarmo.png')} alt="logo" style={{ width: 50, height: 50 }} />
                <span className="p-3">PPM Wiriosoedarmo Gombong</span>
              </Link>
              <Link to="/">Home</Link>
              <div className="dropdown" href="#news">Tentang Kami <FaCaretDown style={{ paddingLeft: 5 }} size={25} />
                <div className="dropdown-content">
                  <Link to="/sejarah">Sejarah</Link>
                  <Link to="/visimisi">Visi dan Misi</Link>
                  <Link to="/fasilitas">Fasilitas</Link>
                  <Link to="sambutan">Sambutan Pembina</Link>
                </div>
              </div>
              <div className="dropdown" href="#news">Service Online <FaCaretDown style={{ paddingLeft: 5 }} size={25} />
                <div className="dropdown-content">
                  <Link to="/">Pendaftaran</Link>
                  <Link to="/">Info Pembayaran</Link>
                  <Link to="/">Perijinan Putri</Link>
                  <Link to="/">Perijinan Putra</Link>
                  <Link to="/login-page">Login</Link>
                </div>
              </div>
              <Link to="/landing-page">Article</Link>
              <Link to="/galery">Galery</Link>
              <Link className="icon" onClick={myFunction}>
                  <i className="fa fa-bars"></i>
              </Link>
          </nav>
        </div>
    )
}