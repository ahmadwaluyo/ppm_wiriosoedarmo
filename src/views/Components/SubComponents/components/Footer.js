import React from 'react';
import Map from './Map';
import { Link } from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';
import * as $ from 'jquery';
import "./responsive-component.css";

export default function Footer() {
    $(function() {
        //caches a jQuery object containing the header element
        var header = $('.scroll');
        $(window).scroll(function() {
           var scroll = $(window).scrollTop();
           if (scroll > header.height()) {
               header.fadeIn("slow");
            } else {
               header.fadeOut("slow");
           }
        });
    });

    $('.scrollup').click(function (){
        $("html,body").animate({
        scrollTop: 0
        }, 800);
        return false;
    });

    return (
        <div className="footer-background">
            <Map />
            <a href="#top" className="scroll">
                <FaAngleUp className="scrollup" size={20} />
            </a>
            <div className="footer-copyright text-center py-3 d-flex justify-content-center align-items-center"> 
                <span>Copyright 2020 ©
                    <Link to="/" className="pl-1">wiriosoedarmogombong.com</Link>
                </span>
            </div>
        </div>
    )
}