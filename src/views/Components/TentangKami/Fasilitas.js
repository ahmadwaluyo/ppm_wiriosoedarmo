import React, { useState } from 'react';
import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';
import Lightbox from 'react-image-lightbox';
import Loader from 'components/Backdrop/Loader.js';
import dataFetch from 'data/Fasilitas';
import 'react-image-lightbox/style.css';
import '../SubComponents/styles/fasilitas.css';

const { fasilitas } = dataFetch.data;

let imagesKimia = [];
let imagesKom = [];
// let imagesAsrama = [];
// let imagesMasjid = [];
// let imagesRoom = [];

fasilitas.map((el) =>
  el.name === "lab_kimia" ?  imagesKimia = el.data : el.name === "lab_komputer" ? imagesKom = el.data : ""
)


export default function Fasilitas() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpenKimia, setIsOpenKimia] = useState(false);
    const [isOpenKom, setIsOpenKom] = useState(false);
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, [1500])
    }, [])

    const handleModalKimia = (id) => {
        setIsOpenKimia(true);
        setPhotoIndex(id-1);
    }

    const handleModalKom = (id) => {
        setIsOpenKom(true);
        setPhotoIndex(id-1);
    }
    
    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'Fasilitas'}/>
        <div className="container-fasilitas">
            {isOpenKimia ? isOpenKimia && (
            <Lightbox
                mainSrc={imagesKimia[photoIndex].img}
                nextSrc={imagesKimia[(photoIndex + 1) % imagesKimia.length].img}
                prevSrc={imagesKimia[(photoIndex + imagesKimia.length - 1) % imagesKimia.length].img}
                onCloseRequest={() => setIsOpenKimia(false)}
                onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + imagesKimia.length - 1) % imagesKimia.length)
                }
                onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % imagesKimia.length)
                }
                animationDuration={2000}
                enableZoom={true}
            />
            ) : isOpenKom && (
                <Lightbox
                    mainSrc={imagesKom[photoIndex].img}
                    nextSrc={imagesKom[(photoIndex + 1) % imagesKom.length].img}
                    prevSrc={imagesKom[(photoIndex + imagesKom.length - 1) % imagesKom.length].img}
                    onCloseRequest={() => setIsOpenKom(false)}
                    onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + imagesKom.length - 1) % imagesKom.length)
                    }
                    onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % imagesKom.length)
                    }
                    animationDuration={2000}
                    enableZoom={true}
                />
            )}
            <div className="wrapper mt-3 mb-3">
                <div className="h2"><h2><strong>Lab Kimia</strong></h2></div>
                <div className="cards">
                    {
                        imagesKimia.map((el, idx) => 
                            <figure className="card" onClick={() => handleModalKimia(el.id)} key={idx}>
                                <img src={`${el.img}`} alt={el.alt} />
                                <figcaption>{el.alt.toUpperCase()}</figcaption>
                            </figure>
                        )
                    }
                </div>
                <div className="h2 mt-5"><h2><strong>Lab Komputer</strong></h2></div>
                <div className="cards">
                    {
                        imagesKom.map((el, idx) => 
                            <figure className="card" onClick={() => handleModalKom(el.id)} key={idx}>
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