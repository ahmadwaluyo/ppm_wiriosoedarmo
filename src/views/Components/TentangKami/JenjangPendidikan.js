import React from 'react';
import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';
import Loader from 'components/Backdrop/Loader.js';

export default function JenjangPendidikan() {
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, [1500])
    }, [])

    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'Pendidikan'}/>
            <div className="content pb-5">
                <h1>PROGRAM PENDIDIKAN</h1>
                <hr></hr>
                <div className="mt-5">
                    <ol className="pt-2 pl-3">
                        <li>program pendidikan untuk tingkat smp dan sma putra dan putri</li>
                        <li>lama pendidikan 6 tahun untuk smp dan sma</li>
                        <li>santri wajib mengikuti program pendidikan selama 6 tahun (smp dan sma)</li>
                        <li>santri yang masuk mulai tingkat sma wajib mengikuti martikulasi selama 2 bulan sebelum bulan juli</li>
                        <li>ijasah (ijasah pondok, ijasah smp, ijasah sma) diberikan saat kelulusan kelas 6 (12 sma)</li>
                        <li>tingkat smp tidak ada seremonial perpisahan</li>
                        <li>kegiatan pendidikan dan pembelajaran sepenuhnya dilaksanakan di pondok</li>
                        <li>guru pengajar khusus guru pondok</li>
                    </ol>
                </div>
            </div>
        <Footer />
        </>
    )
}
    