import React from "react";
// @material-ui/core components
import { withStyles, makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import { CalendarToday, Schedule, List, LabelImportant } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

//table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

// list
// import ListSubheader from '@material-ui/core/ListSubheader';
import ListComponent from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//scroll animation
import ScrollAnimation from "react-animate-on-scroll";
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, events, date, etc) {
  return { id, events, date, etc };
}

const rows = [
  createData(1,'Awal masuk tahun pelajaran 2020/2021', '13 Juli 2020', '*Apabila masa pandemi Covid-19 belum berangsur pulih'),
  createData(2,'Penilaian tengah semester 1', '7-12 September 2020', 'maka jadwal pulang santri ditiadakan.'),
  createData(3,'Perpulangan tengah semester 1', '18-20 September 2020', 'Dan santri hanya diperbolehkan pulang pada hari raya Idul Fitri 1442H'),
  createData(4,'Penilaian akhir semester', '1-12 Desember 2020'),
  createData(5,'Perpulangan akhir semester 1', '21-31 Desember 2020'),
  createData(6,'Penyerahan Laporan Hasil Belajar semester 1', '31 Desember 2020'),
  createData(7,'Penilaian tengah semester 2', '1-6 Maret 2021'),
  createData(8,'Perpulangan tengah semester 2','12-14 Maret 2021'),
  createData(9,'Perkiraan US SMP', '19-30 April 2021'),
  createData(10,'Perkiraan awal ramadhan 1442 H', '13-14 April 2021'),
  createData(11,'Perkiraan Hari Raya Idul Fitri 1442 H', '8-23 Mei 2021'),
  createData(12,'Penilaian Akhir Tahun', '2-12 Juni 2021'),
  createData(13,'Penyerahan Buku Laporan Hasil Belajar', '19 Juni 2021'),
  createData(14,'Libur akhir tahun pelajaran 2020/2021', '21 Juni - 10 Juli 2021'),
];

const rows2 = [
  createData(1,'03.00 - 04.30', 'Bangun Padi dan Sholat Tahajud'),
  createData(2,'04.30 - 05.00', 'Sholat Shubuh + Kultum'),
  createData(3,'05.00 - 05.45', 'Tahfidz Al Quran'),
  createData(4,'05.45 - 06.45', 'Piket Kebersihan, Mandi, Sarapan'),
  createData(5,'06.45 - 07.00', 'Apel Pagi'),
  createData(6,'07.00 - 11.55', 'Masuk Kelas'),
  createData(7,'11.55 - 13.00', 'Sholat Dhuhur, Makan Siang, Istirahat'),
  createData(8,'13.00 - 15-00', 'Masuk Kelas'),
  createData(9,'15.00 - 15-30', 'Sholat Ashar'),
  createData(10,'15.30 - 17.00', 'Piket Kebersihan, ekstrakurikuler, olahraga, mandi, mencuci pakaian'),
  createData(11,'17.00 - 17.30', 'Pengajian Sore'),
  createData(12,'17.30 - 18.30', 'Sholat Maghrib + Kultum'),
  createData(13,'18.30 - 19.00', 'Makan Malam'),
  createData(14,'19.00 - 19.30', 'Sholat Isya'),
  createData(15,'19.30 - 20.00', 'Pengajian Malam'),
  createData(16,'20.00 - 21.00', 'Qiroatul Kutub, Belajar Terbimbing'),
  createData(17,'21.00 - 22.00', 'Apel Malam'),
  createData(18,'22.00 - 03.00', 'Tidur')
];

const rowList = [
  "Kurikulum menggunakan kurikulum Nasional dan Kurikulum Pesantren Muhammadiyah.",
  "Sistem pendidikan selama 6 tahun, dinyatakan lulus pondok jika sudah melewati kelas 6 atau kelas 12 SMA.", 
  "Jurusan Ilmu Pengetahuan Alam (IPA).",
  "Secara pengelolaan semua aktivitas baik asrama maupun pembelajaran formal kelas dilakukan di pesantren. Di dalam data pokok pendidikan (Dapodik) secara formal, santri tercatat sebagai siswa SMP atau SMA Muhammadiyah Gombong.",
  "Tenaga pendidik : Guru mapel umum dari SMP / SMA Muhammadiyah Gombong. Guru mapel PAI/ mapel pesantren khusus ustadz/ah pesantren."
]

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <div className={classes.titleSeparate}>
      <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="1">
        <div className={classes.titleNews}>Akademis</div>
        <hr className={classes.hr} />
      </ScrollAnimation>
    </div>
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="gold"
                tabs={[
                  {
                    tabButton: "Sistem Pendidikan",
                    tabIcon: List,
                    tabContent: (
                      rowList.map((el,index) => 
                        <ListComponent
                          key={index}
                          component="nav"
                          aria-labelledby="nested-list-subheader"
                          className={classes.root}
                        >
                          <ListItem button>
                            <ListItemIcon>
                              <LabelImportant style={{ color: "#FFFFFF"}} />
                            </ListItemIcon>
                            <ListItemText primary={`${el}`} />
                          </ListItem>
                        </ListComponent>
                      )
                    )
                  },
                  {
                    tabButton: "Kalender Pendidikan",
                    tabIcon: CalendarToday,
                    tabContent: (
                      <>
                      <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>No</StyledTableCell>
                              <StyledTableCell align="left">Kegiatan</StyledTableCell>
                              <StyledTableCell align="left">Tanggal</StyledTableCell>
                              <StyledTableCell align="center">Keterangan</StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                              <StyledTableRow key={row.id}>
                                <StyledTableCell>{row.id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                  {row.events}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.date}</StyledTableCell>
                                <StyledTableCell component="th" scope="column">{row.etc}</StyledTableCell>
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <TablePagination
                      rowsPerPageOptions={[8, 20, 100]}
                      component="div"
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      style={{ color: "#fff"}}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                    </>
                    )
                  },
                  {
                    tabButton: "Jadwal Kegiatan Harian",
                    tabIcon: Schedule,
                    tabContent: (
                      <>
                      <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>No</StyledTableCell>
                              <StyledTableCell align="center">Waktu</StyledTableCell>
                              <StyledTableCell align="center">Kegiatan</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows2.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <StyledTableRow key={row.id}>
                                  <StyledTableCell>{row.id}</StyledTableCell>
                                  <StyledTableCell align="center" component="th" scope="row">
                                    {row.events}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                          </TableContainer>
                          <TablePagination
                          rowsPerPageOptions={[8, 20, 100]}
                          component="div"
                          count={rows2.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          style={{ color: "#fff"}}
                          onChangePage={handleChangePage}
                          onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                        </>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
    </>
  );
}
