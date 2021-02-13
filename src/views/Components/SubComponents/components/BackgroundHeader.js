import React, { Fragment } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import '../styles/BackgroundNav.css';
import '../styles/SejarahStyle.css';
import './responsive-component.css';

export default function BackgroundHeader(props) {
    let { data } = props;
    return (
        <Fragment>
            <div style={{ height: 418, background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://firebasestorage.googleapis.com/v0/b/storageahmad-134a6.appspot.com/o/rsz_2backgroundheader.jpg?alt=media&token=73b53602-e71e-4cc1-b7fe-4a815123ad67")`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Navbar />
                <div id="title-nav" className="history"><span>|</span>{data.toUpperCase()}</div>
            </div>
            <div className="container mt-4">
                <nav>
                    <ul>
                        <Link to="/" className="mr-2">Home</Link>
                        <FaAngleDoubleRight style={{ color: '#666666' }} />
                        <span className="ml-2">{data}</span>
                    </ul>
                </nav>
                <hr className="border mt-2" />
            </div>
        </Fragment>
    )
}