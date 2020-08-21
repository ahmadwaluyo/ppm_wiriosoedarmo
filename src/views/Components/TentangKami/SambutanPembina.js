import React from 'react';
import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';
import Loader from 'components/Backdrop/Loader.js';

export default function SambutanPembina() {
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, [1500])
    }, [])

    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'Sambutan'}/>
            <div className="content">
                <h1>SAMBUTAN MUDIR</h1>
                <hr></hr>
                <div className="mt-5">
                <p>
                Lembaga Pendidikan Muslimah Indonesia (LPMI) Al-Izzah didirikan Oleh Ustad H. Ali Imron, M.Ag pada tanggal 17 Juli 2006 dan diresmikan oleh Menteri Pemuda dan Olahraga Bapak Adiyaksa Daut dan Bapak Imam Kabul selaku Walikota Batu. Berkedudukan di Jalan Indragiri Gang Pangkur No 87, Sumberejo, Kota Batu, LPMI Al Izzah dibangun berlandaskan keinginan yang kuat memberi jawaban alternatif tehadap kecemasan para orang tua mengenai masa depan anak-anaknya, khususnya anak-anak putri. Sebuah lembaga yang mengintegrasikan nilai-nilai fundamental Islam dengan pemberian wawasan yang komperehensif mengenai tantangan di zamannya. Di awali tahun 2006 Al Izzah menyelenggarakan pendidikan menengah (SMP) dan di tahun 2011 memulai program pedidikan menengah atas (SMA).
                </p><br/>
                <p>
                Dengan mengikrarkan diri menjadi sekolah berstandard internasional dan ter-akreditasi A, sekolah ini telah beranjak menjadi salah satu sekolah unggulan di Kota Batu, LPMI Al Izzah Batu menggambarkan kemajuan yang signifikan terhadap komitmen membangun nilai-nilai keislaman dan moralitas secara umum.
                </p><br/>
                <p>
                Menawarkan cara-cara baru dan inovatif, Lembaga Pendidikan Muslimah Indonesia (LPMI) progam SMP-SMA Al-Izzah mengamalkan ilmu pengetahuan dan teknologi yang terintegrasi dengan nilai-nilai islami. Dalam sistem ini, kita berharap santri mengenal secara mantap tentang jati dirinya sebagai generasi Islam, sekaligus mampu manampilkan bakat dan potensinya serta memandang secara optimis setiap fenomena mutakhir yang kelak dihadapinya. Artinya, mereka harus dididik dalam sebuah lembaga yang mengintegrasikan nilai-nilai fundamental Islam dengan pemberian wawasan yang komperehensif mengenai tantangan di zamannya.
                </p>
                </div>
            </div>
        <Footer />
        </>
    )
}
