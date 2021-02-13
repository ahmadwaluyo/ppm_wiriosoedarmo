import React from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Row, Col } from "react-bootstrap";
import '../styles/MapStyle.css';

export default function Map () {
    return (
        <div className="z-depth-4-half map-container">
            <footer className="page-footer font-small blue pt-4">
            <Row className="m-5 row-map">
                <Col md={6} xs={12} className="col-map-1">
                    <Row>
                        <img src={require('../images/wiriosoedarmo.png')} alt="logo-footer" width="50" height="50" />&nbsp;
                        <h5 className="text-uppercase">PM WIRIOSOEDARMO GOMBONG</h5>
                    </Row>
                    <ul className="list-unstyled pt-3">
                        <li>
                            <a href="#!">
                                <FaPhone size={16} color={'#ABABAB'}/>
                                <span className="contact pl-3">phone : (+62)81327455703</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="d-flex pt-2 align-items-center">
                                <FaEnvelope size={18} color={'#ABABAB'}/>
                                <span className="contact pl-3 d-flex">email :</span> &nbsp;
                                <span>pesantren.wiriosoedarmomgb@gmail.com</span>
                            </a>
                        </li>
                        <br />
                        <li>
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
                </Col>
                <Col md={2} xs={4} className="col-map-2">
                    <h5 className="text-uppercase">Company</h5>
                    <ul className="list-unstyled pt-2">
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
                </Col>
                <Col md={2} xs={4} className="col-map-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled pt-2">
                        <li className="pt-2">
                            <a href="#!">Careers</a>
                        </li>
                        <li className="pt-2">
                            <a href="#!">Events</a>
                        </li>
                    </ul>
                </Col>
                <Col md={2} xs={4} className="col-map-4">
                    <h5 className="text-uppercase">Alumni</h5>
                    <ul className="list-unstyled pt-2">
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
                </Col>
            </Row>
            </footer>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6775847005947!2d109.51452094994372!3d-7.610019477307949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654b9f5e614121%3A0xeb62cce329543edf!2sPondok%20Pesantren%20Wiriosoedarmo!5e0!3m2!1sid!2sid!4v1594130669810!5m2!1sid!2sid" width="650" height="200" title="map-wirio" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <hr style={{ color: "#ffffff"}} />
        </div>
    )
}