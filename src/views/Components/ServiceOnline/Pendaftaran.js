import React from 'react';
import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';
import Loader from 'components/Backdrop/Loader.js';

export default function Admission() {
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, [1500])
    }, [])

    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'STUDENT ADMISSION'}/>
            <div className="content pb-5">
                <h1>VISI DAN MISI</h1>
                <hr></hr>
                <div className="mt-5">
                <p>Pondok Pesantren Modern Wiriosoedarmo Muhammadiyah Gombong mengemban visi dan misi sebagai berikut:</p><br/>
                <span style={{ fontSize: 20, fontWeight: 700 }}>VISI</span><br/>
                <p className="pt-3">
                Menjadi pesantren modern yang mencetak kader-kader pemimpin umat, giat beribadah, berakhlakul karimah, menguasai ilmu pengetahuan dan teknologi</p><br/>
                <span style={{ fontSize: 20, fontWeight: 700 }}>MISI</span><br />
                <ol className="pt-3 pl-3">
                    <li>Mempersiapkan generasi yang berkualitas yang seimbang dalam ilmu dan amal.</li>
                    <li>Menyelenggarakan pendidikan yang kondusif terhadap pembentukan pribadi yang sholeh, berbudi tinggi, berbadan sehat, berpengetahuan luas, dan berkhidmat kepada masyarakat.</li>
                    <li>Mengajarkan ilmu pengetahuan agama dan umum secara seimbang menuju ulama yang berjiwa besar dan intelek.</li>
                    <li>Mempersiapkan warga negara yang berkepribadian Indonesia yang beriman dan bertakwa kepada Allah SWT.</li>
                </ol><br />
                <span style={{ fontSize: 20, fontWeight: 700 }}>TUJUAN</span><br />
                <ol className="pt-3 pl-3">
                    <li>Melahirkan kader ulama Muhammadiyah</li>
                    <li>Mencetak kader yang mampu membaca kitab kuning dan kaya literasi</li>
                    <li>Mencetak kader yang melanjutkan ke Perguruan Timur Tengah</li>
                    <li>Mencetak kader yang unggul dalam bahasa Arab dan Bahasa Inggris secara aktif yang siap berkiprah di masyarakat.</li>
                </ol><br />
            </div>
            </div>
        <Footer />
        </>
    )
}
    