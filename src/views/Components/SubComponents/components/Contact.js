import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact () {
    return (
        <nav className="navbar p-2 navbar-expand-lg d-flex justify-content-end">
            <a className="nav-item-left nav-item nav-link active disabled" href="/">Informasi Pendaftaran</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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