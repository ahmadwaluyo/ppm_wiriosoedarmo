import React, { useState, useEffect } from 'react';
import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem } from '@material-ui/lab';
import Loader from 'components/Backdrop/Loader.js';

export default function Sejarah() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, [1500])
    }, [])


    const page1 = () => {
        return (
            <>
            <p>
            Mbah Wir meninggal dunia pada tahun 1976, meninggal di Dukuh Bojong Desa Sempor dan dimakam di pemakaman Desa Kalibeji. Beliau sempat mengalami beberapa generasi Muhammadiyah. Jika sekarang beliau dapat melihat perkembangan Muhammadiyah di Gombong tentu beliau akan tersenyum manis, amal baiknya yang beliau tabur benihnya kini telah menjadi pohon yang rindang, banyak buahnya dan memberi banyak manfaat bagi masyarakat.</p><br />
            <p>Tahun 2018 Pimpinan Cabang Muhammadiyah bertekad mendirikan pesantren Muhammadiyah yang berorientasi menciptakan kader-kader ulama dan kader bangsa. Pesantren ini dibuat dengan harapan para lulusannya dapat membaca dan menguasai kitab-kitab kuning (kitab Turats), lancar berbahasa Arab dan bahasa Inggris, dan dapat melanjutkan ke perguruan tinggi di berbagai universitas di mancanegara.</p><br />
            <p>Proses berdirinya pesantren ini berjalan cukup lama, sekitar tahun 2.000 Muhammadiyah Gombong sempat memiliki pondok pesantren namun hanya berjalan beberapa tahun. Pada tahun 2003 hingga 2004 siswanya tinggal hitungan jari saja, dan akhirnya tahun 2006 benar-benar tutup. Penulis adalah santri terakhir pondok pesantren Nurul Hikmah Muhammadiyah Gombong. Lokasinya berada di gedung sebelah timur SMP Muhammadiyah Gombong.</p><br />
            <p>Diantara kendala yang dihadapi sehingga pondok tidak dapat bertahan lama adalah karena minimnya pengasuh dan tidak ada komitmen bersama untuk merawat dan mengembangkan pondok. Sehingga wajar jika pondok pesantren hanya berjalan beberapa tahun saja.</p><br />
            <p>Tahun 2015 Pimpinan Cabang Pemuda Muhammadiyah Gombong melalui Bidang Pendidikan dan Kaderisasi berinisiatif mendirikan pondok pesantren kembali dengan diberi nama Pondok Pesantren Fastabiq. Model pesantren adalah santri kalong, siang sekolah di sekolah yang berbeda-beda, sore hari pulang ke asrama dan malam hingga pagi hari ada jadwal mengaji. Namun pondok inipun hanya berjalan sekitar 3 tahun. Tidak sesuai harapan, hanya mendapat 5 santri dan hanya 1 yang bertahan sampai tamat SMA.</p><br />
            </>
        )
    }

    const page2 = () => {
        return (
            <>
                <p> Minimnya pendanaan dan terutama dukungan dari Pimpinan Cabang Muhammadiyah saat itu menjadi kendala terberat berjalannya pondok pesantren. Pimpinan Cabang Pemuda Muhammadiyah dan AMM Gombong hanya mengandalkan beberapa donatur saja sehingga operasional pondok tidak dapat bertahan lama dan tidak dapat menambah santri baru karena semua santri digratiskan, alias tidak berbiaya.</p><br />
                <p>Dengan berbagai pertolongan Allah SWT, pada periode Muktamar ke 47 ini PCM Gombong dapat mendirikan pesantren Muhammadiyah sebagai lahan dakwah kaderisasi ulama Muhammadiyah. Pada mulanya program pendirian pesantren masuk dalam rencana kegiatan Majelis Dikdasmen PCM Gombong dan ditargetkan tahun 2020 akan didirikan. Namun karena ada donator datang dari Saudi, beliau syaikh Habib yang memberikan bantuan melalui yayasan Muwahidun Surabaya sehingga dengan “terpaksa” pesantren berdiri lebih awal dari yang direncanakan.</p><br />
                <p>Secara teknis, Pimpinan Cabang Muhammadiyah Gombong yang diketuai bapak Widiantoro Tri Atmaji, S.Pd, MM. focus pada pembangunan sarana prasarana atau hardware. Sedangkan Majelis Dikdasmen bersama tim yang dipimpin pak KH. M. Khojim focus menyiapkan kurikulum dan perangkat-perangkatnya atau software.</p><br />
                <p>Baik tim Hardware maupun tim Software bekerja keras agar target tahun pelajaran pertama yaitu bulan Juli 2018 sudah dibuka. Sedangkan pembangunan fisik dimulai bulan Maret. Alhamdulillah berkat pertolongan Allah yang Mahakuasa akhirnya secara resmi pesantren modern Wiriosoedarmo Muhammadiyah Gombong resmi berdiri di atas tanah yang dibeli secara patungan oleh warga Muhammadiyah.</p><br />
                <p>Sebagai penghormatan sekaligus untuk mengingat perjuangan mbah Wiriosoedarmo dalam mengembangkan Muhammadiyah di Gombong, maka nama beliau diabadikan sebagai nama pesantren Muhammadiyah Gombong. PESANTREN MODERN WIRIOSOEDARMO MUHAMMADIYAH GOMBONG. Semoga Allah SWT menerima segala amal perjuangan Mbah Wir dan para pejuang Muhammadiyah yang terdahulu. Dan Semoga Allah SWT meridhoi berdirinya pesantren ini, semoga kelak menjadi pesantren modern yang banyak melahirkan ulama dan cendekiawan Islam. Amiin ya rabbal ‘alamiin..
                </p>
            </>
        )
    }

    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'Sejarah'}/>
            <div className="content pb-5 mb-5">
                <h1>HISTORY</h1>
                <hr></hr>
                <div className="mt-5">
                <p>Oleh: <a href="/">Heri Pramono</a></p><br />
                {
                    activePage === 2 ? page1() :
                    activePage === 3 ? page2() : ''
                }
            </div>
            <div className={classes.root}>
                <Pagination 
                count={2} 
                renderItem={(item) => (
                    <PaginationItem 
                    to={item.page === 1 ? '' : setActivePage(item.page)}
                    { ...item}
                    />
                )}
                shape="rounded" />
            </div>
            </div>
        <Footer />
        </>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
      marginTop: 80
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    }
  }));