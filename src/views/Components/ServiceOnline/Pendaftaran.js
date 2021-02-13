import React, { Fragment } from 'react';
import GridItem from "components/Grid/GridItem.js";
import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Loader from "components/Backdrop/Loader";
import Lightbox from 'react-image-lightbox';
import Footer from '../SubComponents/components/Footer';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import 'react-image-lightbox/style.css';

const brosur = require('assets/img/pendaftaran/brosur.jpeg');
const file = require('assets/file/PSB.pdf');


export default function Admission(props) {
  const [open, setOpen] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const docs = [
    { uri: brosur }, // Local File
    { uri: file },
  ];


  React.useEffect(() => {
    setInterval(() => {
      setOpen(false)
    }, 2000)
  }, [])


    return (
        <Fragment>
          <Loader open={open} />
          <BackgroundHeader data={'STUDENT ADMISSION'}/>
          <br />
          {
          isOpen && (
            <Lightbox
                mainSrc={brosur}
                onCloseRequest={() => setIsOpen(false)}
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
              <br />
              <br />
              <hr />           
              <h4 className="text-center"><strong>Detail Pendaftaran</strong></h4>
              <hr />
              <DocViewer 
              pluginRenderers={DocViewerRenderers}
              documents={docs}
              />
              <br />
              </GridItem>
          </div>
          <br />
          <Footer />
        </Fragment>
    )
}

    