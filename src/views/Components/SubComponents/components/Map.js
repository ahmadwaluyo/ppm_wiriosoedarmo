import React from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import '../styles/MapStyle.css';

export default function Map () {
    return (
        <div id="map-container-google-2" className="z-depth-4-half map-container">
            <footer class="page-footer font-small blue pt-4">
            <div class="container-fluid text-center text-md-left">
            <div class="row pl-5">
                <div class="col-md-4 mt-md-0 pt-3 pl-3">
                    <div className="row d-flex justify-content-center align-items-center mt-1">
                        <img src={require('../images/wiriosoedarmo.png')} alt="logo-footer" style={{ width: 50, height: 50, marginTop: 25 }} />
                        <h5 class="text-uppercase pl-3 pt-4">PPM WIRIOSOEDARMO</h5>
                    </div>
                    <ul class="list-unstyled pl-5 pt-2">
                        <li className="pt-3 pl-5">
                            <a href="#!">
                                <FaPhone size={16} color={'#ABABAB'}/>
                                <span className="contact pl-3">(+62)81327455703</span>
                            </a>
                        </li>
                        <li className="pt-3 pl-5">
                            <a href="#!">
                                <FaEnvelope size={18} color={'#ABABAB'}/>
                                <span className="contact pl-3">email : <p className="contact-email">pesantren.wiriosoedarmomgb@gmail.com</p></span>
                            </a>
                        </li>
                        <li className="pt-4 pl-5">
                            <a href="https://web.facebook.com/pesantren.gombong" alt="facebook" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <FaFacebookF className="icons" color={'#ABABAB'}/>
                            </a>
                            <a href="https://www.instagram.com/ponpes_wiriosoedarmo/" alt="instagram" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <FaInstagram className="icons" color={'#ABABAB'}/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCMuxxsGqi1x9H3CxRC0OAcg" alt="youtube" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <FaYoutube className="icons" color={'#ABABAB'}/>
                            </a>
                            <a href="https://wa.me/081327455703/?text=Assalamu'alaikum PPM Wiriosoedarmo, ada yang bisa di bantu ?" alt="whatsapp" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <FaWhatsapp className="icons" color={'#ABABAB'}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr class="clearfix w-100 d-md-none pb-3" />
                <div class="col-md-2 mb-md-0 mb-3 pt-5">
                    <h5 class="text-uppercase">Company</h5>
                    <ul class="list-unstyled pt-2">
                        <li className="pt-2">
                        <a href="/sejarah">About Us</a>
                        </li>
                        <li className="pt-2">
                        <a href="#!">Blog</a>
                        </li>
                        <li className="pt-2">
                        <a href="#!">Perijinan</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 mb-md-0 mb-3 pt-5">
                    <h5 class="text-uppercase">Links</h5>
                    <ul class="list-unstyled pt-2">
                        <li className="pt-2">
                            <a href="#!">Careers</a>
                        </li>
                        <li className="pt-2">
                            <a href="#!">Events</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 mb-md-0 mb-3 pt-5">
                    <h5 class="text-uppercase">Alumni</h5>
                    <ul class="list-unstyled pt-2">
                        <li className="pt-2">
                        <a href="#!">Student Exchange</a>
                        </li>
                        <li className="pt-2">
                        <a href="#!">Alumni</a>
                        </li>
                        <li className="pt-2">
                        <a href="#!">Sponsorship</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </footer>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6775847005947!2d109.51452094994372!3d-7.610019477307949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654b9f5e614121%3A0xeb62cce329543edf!2sPondok%20Pesantren%20Wiriosoedarmo!5e0!3m2!1sid!2sid!4v1594130669810!5m2!1sid!2sid" width="600" height="200" title="map-wirio" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <hr style={{ color: "#ffffff"}} />
        </div>
    )
}