import React from 'react';
import Map from './Map';
import { Link } from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';
import * as $ from 'jquery';

export default function Footer() {
    $(function() {
        //caches a jQuery object containing the header element
        var header = $('.scroll');
        $(window).scroll(function() {
           var scroll = $(window).scrollTop();
           if (scroll < header.height()) {
             header.fadeOut("slow");
           } else {
             header.fadeIn("slow");
           }
        });
    });

    return (
        <div className="footer-background">
            <Map />
            <a href="#top" className="scroll">
                <FaAngleUp size={20} />
            </a>
            <div className="footer-copyright text-center py-3 d-flex justify-content-center align-items-center pb-5"> 
                <span>Copyright 2020 ©
                    <Link to="/" className="pl-1">ppmwiriosoedarmo.com</Link>
                </span>
            </div>
        </div>
    )
}