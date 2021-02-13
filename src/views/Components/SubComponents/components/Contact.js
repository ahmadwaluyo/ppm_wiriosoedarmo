import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import "./responsive-component.css";

export default function Contact () {
    return (
        <nav className="navbar-contact p-2 navbar-expand-lg d-flex justify-content-start" style={{ backgroundColor: "#000"}}>
            <a className="nav-item-left nav-item nav-link active disabled" href="/">Informasi Pendaftaran</a>
            <div>
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="/">
                    <FaPhone size={16} color={'#ABABAB'}/>
                    <span className="pl-2">081327455703</span>
                </a>
                <a className="nav-item nav-link" href="/">
                    <FaEnvelope size={20} color={'#ABABAB'}/>
                    <span className="pl-2">email : pesantren.wiriosoedarmomgb@gmail.com</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}