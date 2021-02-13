import React, { Fragment } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
//loader
import Loader from "components/Backdrop/Loader";
import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';
import { ContactPhone, AccountBalanceWallet, ReportProblem, LabelImportant, PeopleOutline } from "@material-ui/icons";
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
import ListComponent from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const file = './teknis_telepon2.pdf';

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

function createData(id, events, date, etc, note) {
  return { id, events, date, etc, note};
}

const rows = [
  createData(1,'7 & 10 Putri', 'Usth. Leni', '085385454142', 'Setiap hari Ahad, jadwal menyusul sesuai informasi dari ustadz yang bersangkutan'),
  createData(2,'8 & 11 Putri', 'Usth. Khansa', '085600639332'),
  createData(3,'9 & 12 Putri', 'Usth. Faizah', '083154793268'),
  createData(4,'7 & 10 Putra', 'Ust. Ulhaq', '081994661454'),
  createData(5,'8 & 11 Putra', 'Ust. Umam', '082323119467'),
  createData(6,'9 & 12 Putra', 'Ust. Abdurrahman', '081393366815'),
];

const moneyRule = [
  "Uang jajan santri dititipkan kepada musyrif/ah.",
  "Setiap hari Rabu (malam Kamis) dan Sabtu (malam Ahad), santri dibolehkan mengambil uang jajan maksimal 20.000,- setiap pengambilan.",
  "Pengeluaran selain jajan (ex : membeli deterjen, sabun, pembalut dll.) boleh mengambil sewaktu-waktu dengan perhitungan logis.",
  "Semua ini bertujuan untuk membangun budaya hemat setiap santri."
]

const visitMechanism = [
  "Selama pandemik covid-19 belum dinyatakan hilang, santri dilarang dijenguk oleh keluarga.",
  "Wali santri yang akan mengirim makanan atau keperluan lainnya, diterima oleh ustadz/ah.",
  "Wali santri tidak boleh mengirim makanan yang pedas.",
  "Wali santri yang kangen dengan putra/putrinya boleh minta dikirim video aktivitas ananda maksimal seminggu dua kali.",
  "Jika pandemi covid-19 sudah dinyatakan hilang, wali santri baru diijinkan menjenguk 1 minggu sekali sampai bulan Agustus. Bulan September dan seterusnya hanya diijinkan menjenguk sebulan sekali.",
  "Santri lama hanya boleh dijenguk sebulan sekali. Hal ini diatur untuk menjaga kedewasaan santri. Jika terlalu sering dijenguk, santri cenderung menjadi manja, jika tidak pernah dijenguk berpotensi terjadi kecemburuan sosial."
  ]

const forbiddenRules = [
  "Santri dilarang membawa HP atau laptop. Hanya santri kelas 12 yang diijinkan membawa HP dan laptop untuk menyelesaikan tugas akhir.",
  "Dilarang membawa alat elektronik dalam bentuk apapaun seperti music box, tape, kamera dll.",
  "Dilarang membawa makanan pedas.",
  "Dilarang membawa kaos bergambar atau bertuliskan tidak mendidik seperti : kaos metalica, linkin park, gambar satanic, tengkorak dsb.",
  "Dilarang berdandan “menor” bagi santriwati, membawa pensil alis, lipstick.",
  "Dilarang tidur satu ranjang dengan teman, pinjam meminjam pakaian, alat makan dan peralatan mandi."
]

const callChild = [
  "Musyrif/ah membuat jadwal telpon anak.",
  "Batas maksimal telpon 15 menit.",
  "Wali santri menelpon pada jam-jam yang telah ditentukan oleh musyrif/ah.",
  "Nomor yang bisa dihubungi sebagai berikut :"
]

const useStyles = makeStyles(styles);

export default function Admission(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    setInterval(() => {
      setOpen(false)
    }, 2000)
  }, [])


  return (
      <Fragment>
        <Loader open={open} />
        <BackgroundHeader data={'STUDENT PERMISSION'}/>
        <br />
        <div className={classes.titleSeparateAdmission}>
          <div className={classes.titleNewsAdmission}>
            Peraturan { '&' } Perijinan
          </div>
          </div>
          <div className={classes.sectionAdmission}>
            <div className={classes.container}>
              <div id="navigation-pills">
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <NavPills
                      color="success"
                      tabs={[
                        {
                          tabButton: "Daftar Larangan",
                          tabIcon: ReportProblem,
                          tabContent: (
                            forbiddenRules.map((el,index) => 
                              <ListComponent
                                key={index}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className={classes.root}
                              >
                                <ListItem button>
                                  <ListItemIcon>
                                    <LabelImportant />
                                  </ListItemIcon>
                                  <ListItemText primary={`${el}`} />
                                </ListItem>
                              </ListComponent>
                            )
                          )
                        },
                        {
                          tabButton: "Mekanisme Penjengukan",
                          tabIcon: PeopleOutline,
                          tabContent: (
                            visitMechanism.map((el,index) => 
                              <ListComponent
                                key={index}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className={classes.root}
                              >
                                <ListItem button>
                                  <ListItemIcon>
                                    <LabelImportant />
                                  </ListItemIcon>
                                  <ListItemText primary={`${el}`} />
                                </ListItem>
                              </ListComponent>
                            )
                          )
                        },
                        {
                          tabButton: "Mekanisme Telpon ke Anak",
                          tabIcon: ContactPhone,
                          tabContent: (
                            <>
                            {
                              callChild.map((el,index) => 
                              <ListComponent
                                key={index}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className={classes.root}
                              >
                                <ListItem button>
                                  <ListItemIcon>
                                    <LabelImportant />
                                  </ListItemIcon>
                                  <ListItemText primary={`${el}`} />
                                </ListItem>
                              </ListComponent>
                            )
                          }
                          <br />
                            <TableContainer component={Paper}>
                              <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                  <TableRow>
                                    <StyledTableCell>No</StyledTableCell>
                                    <StyledTableCell align="left">Kelas</StyledTableCell>
                                    <StyledTableCell align="left">Wali Asrama</StyledTableCell>
                                    <StyledTableCell align="center">Nomer</StyledTableCell>
                                    <StyledTableCell align="center">Waktu</StyledTableCell>
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
                                      <StyledTableCell component="th" align="center" scope="row">{row.etc}</StyledTableCell>
                                      <StyledTableCell align="left">{row.note}</StyledTableCell>
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
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                          />
                          </>
                          )
                        },
                        {
                          tabButton: "Mekanisme Uang Jajan",
                          tabIcon: AccountBalanceWallet,
                          tabContent: (
                            moneyRule.map((el,index) => 
                              <ListComponent
                                key={index}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className={classes.root}
                              >
                                <ListItem button>
                                  <ListItemIcon>
                                    <LabelImportant />
                                  </ListItemIcon>
                                  <ListItemText primary={`${el}`} />
                                </ListItem>
                              </ListComponent>
                            )
                          )
                        }
                      ]}
                    />
                    <span className="d-flex justify-content-center m-5">Perubahan peraturan selengkapnya dapat juga di download <a href={file} download alt="file" className="pl-2">disini</a></span>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        <Footer />
      </Fragment>
  )
}