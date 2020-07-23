import React, { useState } from 'react';
import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';
import Lightbox from 'react-image-lightbox';
import Loader from 'components/Backdrop/Loader.js';
import 'react-image-lightbox/style.css';
import '../SubComponents/styles/fasilitas.css';

const images = [
    {
        id: 1,
        img: require('../SubComponents/images/1.jpg'),
        alt: 'testing1'
    },
    {
        id: 2,
        img: require('../SubComponents/images/2.jpg'),
        alt: 'testing2'
    },
    {
        id: 3,
        img: require('../SubComponents/images/3.jpg'),
        alt: 'testing3',
    },
    {
        id: 4,
        img: require('../SubComponents/images/4.jpg'),
        alt: 'testing4',
    },
    {
        id: 5,
        img: require('../SubComponents/images/5.jpg'),
        alt: 'testing5'
    }
];

export default function Fasilitas() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, [1500])
    }, [])

    const handleModal = (id) => {
        setIsOpen(true);
        setPhotoIndex(id-1);
    }
    
    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'Fasilitas'}/>
        <div className="container-fasilitas">
            {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex].img}
                nextSrc={images[(photoIndex + 1) % images.length].img}
                prevSrc={images[(photoIndex + images.length - 1) % images.length].img}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
                }
            />
            )}
            <div className="wrapper mt-3 mb-3">
                <div className="h2"><h2><strong>Lab Kimia</strong></h2></div>
                <div className="cards">
                    {
                        images.map((el, idx) => 
                            <figure className="card" onClick={() => handleModal(el.id)} key={idx}>
                                <img src={`${el.img}`} alt={el.alt} />
                                <figcaption>{el.alt.toUpperCase()}</figcaption>
                            </figure>
                        )
                    }
                </div>
                <div className="h2 mt-5"><h2><strong>What's new?</strong></h2></div>
                <div className="cards">
                    {
                        images.map((el, idx) => 
                            <figure className="card" onClick={() => handleModal(el.id)} key={idx}>
                                <img src={`${el.img}`} alt={el.alt} />
                                <figcaption>{el.alt.toUpperCase()}</figcaption>
                            </figure>
                        )
                    }
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}