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
                <div className="mt-5 mb-5">
                    <p>Assalamu’alaikum Wr. Wb</p>
                    <br />
                    <p>Segala puji tertuju kepada Allah SWT semata yang telah mencurahkan nikmat, Iman, Islam dan kehidupan kepada kita. Shalawat dan salam mudah-mudahan tetap dilimpahkan kepada Rasulullah SAW teladan hidup insan bertaqwa. Teriring do’a semoga kita senantiasa diberikan oleh Allah SWT kekuatan sehingga dapat mengemban amanah dan menunaikan kewajiban dengan sebaik-baiknya.</p>

                    <p>Profil Pesantren Modern Wiriosoedarmo Muhammadiyah Gombong ini merupakan media informasi dari kami, agar masyarakat, intansi dan pemerintah dapat mengenal lebih dekat lagi aktifitas para praktisi Sekolah Pesantren Modern Wiriosoedarmo dalam mengemban amanah Dakwah Islamiyah sesuai dengan Visinya :</p>

                    <p><strong><i>“Menjadi pesantren modern yang mencetak kader-kader pemimpin umat, giat beribadah, berakhlakul karimah, menguasai ilmu pengetahuan dan teknologi“</i></strong></p>

                    <p>Berangkat dari visi tersebut maka segenap civitas akademika berkomitmen untuk menjadikan Pesantren Wiriosoedarmo sebagai Sentra membangun komitmen keislaman model pendidikan Rasulullah SAW.</p>

                    <p>Sistem pendidikan terpadu antara Pendidikan formal tingkat SMP–SMA dan pendidikan pesantren mengembangkan program unggulan (Qiroatul Kutub, Tahfizhul Qur’an, Bahasa Arab, Bahasa Inggris dan Al 'ulum As syar'iyyah ), juga pendidikan karakter berorganisasi yang membentuk jiwa kepemimpinan santri. Sehingga kelak mereka menjadi layaknya pohon kelapa yang dapat tumbuh  dan memberi manfaat di berbagai tempat di masyarakat.</p>

                    <p>Struktur organisasi yang solid dibawah naungan dikdasmen PCM Gombong, ditopang oleh sarana dan prasarana yang memadai membuat proses belajar mengajar santri berlangsung dengan kondusif, terlebih kegiatan pembelajaran para santri Wiriosoedarmo terpisah dengan siswa umum yang lain. Hal ini diperuntukkan agar santri lebih fokus dalam mengikuti kegiatan pembelajaran khusus pesantren yang berbeda dengan siswa umum yang lain.</p>

                    <p>Harapan kami, siapapun santri yang datang menuntut ilmu ke Sekolah Pesantren Modern Muhammadiyah Gombong, akan merasa betah berada di lingkungan pesantren.  Sehingga visi misi pesantren dapat tercapai dengan baik, dan lulusannya menjadi kader yang kompeten dalam berdakwah membangun ummat. Akhirul kalam</p>
                    <br />
                    <p>Nashrun minallah wa fathun qariib. Fastabiqul khoirot</p>
                    <br />
                    <p>Wassalamu’alaikum Wr.Wb</p>
                    <br />
                    <p><strong>Heri Pramono, S. Pd</strong></p>
                </div>
            </div>
        <Footer />
        </>
    )
}
