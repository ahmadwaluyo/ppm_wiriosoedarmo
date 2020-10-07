import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Loader from "components/Backdrop/Loader";
import Lightbox from 'react-image-lightbox';
import Footer from '../SubComponents/components/Footer';
import FileViewer from 'react-file-viewer';
import 'react-image-lightbox/style.css';

const brosur = require('assets/img/pendaftaran/brosur.jpeg');
const file = require('assets/file/PSB.docx');
const type = 'docx';


export default function Admission(props) {
  const [open, setOpen] = React.useState(true);
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);


  React.useEffect(() => {
    setInterval(() => {
      setOpen(false)
    }, 2000)
  }, [])

  const onError = (e) => {
    console.log(e, "error in file-viewer");
  }

    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'STUDENT ADMISSION'}/>
        {
        isOpen && (
          <Lightbox
              mainSrc={brosur}
              // nextSrc={datas[(photoIndex + 1) % datas.length].img}
              // prevSrc={datas[(photoIndex + datas.length - 1) % datas.length].img}
              onCloseRequest={() => setIsOpen(false)}
              // onMovePrevRequest={() =>
              // setPhotoIndex((photoIndex + datas.length - 1) % datas.length)
              // }
              // onMoveNextRequest={() =>
              // setPhotoIndex((photoIndex + 1) % datas.length)
              // }
              animationDuration={2000}
              enableZoom={true}
            />)
        }
        <div style={{ fontSize: 18, display: "block"}}>
            <GridItem className="text-center pb-2">
                <h3><b>PENERIMAAN SANTRI BARU<br />
                PM WIRIOSOEDARMO MUHAMMADIYAH GOMBONG<br />
                    PSB 2021/2022</b></h3>
            </GridItem>
            <GridItem className="d-flex justify-content-center">
              <img src={brosur} alt="img" width="40%" onClick={() => setIsOpen(true)} />
            </GridItem>
            <GridItem>                
            <FileViewer fileType={type} filePath={file} onError={onError} />
            <br />
            <br />
            </GridItem>
            <span className="d-flex justify-content-center m-5">Selengkapnya, dapat di download <a href={file} download alt="file" className="pl-2">disini</a></span>
            <span className="d-flex justify-content-center m-5">Download brosure<a href={brosur} download alt="file" className="pl-2">disini</a></span>
        </div>
        <Footer />
        </>
    )
}

    