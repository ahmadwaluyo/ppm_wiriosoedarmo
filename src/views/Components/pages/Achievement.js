import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Loader from 'components/Backdrop/Loader.js';

import BackgroundHeader from '../SubComponents/components/BackgroundHeader';
import Footer from '../SubComponents/components/Footer';

//animation
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default function Achievements() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, [1500])
    }, [])

    return (
        <>
        <Loader open={open} />
        <BackgroundHeader data={'Achievments'}/>
            <div className="content pb-5">
                <div className="mt-5">
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent className={classes.opponent}>
                            <Paper elevation={3} className={classes.paperTypo}>
                                <Typography variant="h6" className={classes.typo}>
                                2018
                                </Typography>
                            </Paper>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot>
                                <FastfoodIcon />
                            </TimelineDot>
                            <TimelineConnector className={classes.connector} />
                            </TimelineSeparator>
                            <TimelineContent>
                            <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration=".5">
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                Prestasi Siswa-Siswi SMP
                                </Typography>
                                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ex maxime, quibusdam hic pariatur similique accusantium voluptatum provident eveniet, corporis consequatur fugit repudiandae quidem corrupti minus dicta sed, doloribus quos?</Typography>
                            </Paper>
                            </ScrollAnimation>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                            <Paper elevation={3} className={classes.paperTypo}>
                                <Typography variant="h6" className={classes.typo}>
                                2018
                                </Typography>
                            </Paper>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="1">
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                Prestasi Siswa-Siswi SMA
                                </Typography>
                                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ex maxime, quibusdam hic pariatur similique accusantium voluptatum provident eveniet, corporis consequatur fugit repudiandae quidem corrupti minus dicta sed, doloribus quos?</Typography>
                            </Paper>
                            </ScrollAnimation>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className={classes.opponent}>
                            <Paper elevation={3} className={classes.paperTypo}>
                                <Typography variant="h6" className={classes.typo}>
                                2019
                                </Typography>
                            </Paper>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <HotelIcon />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                            <TimelineContent>
                            <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="1.5">
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                Prestasi Siswa-Siswi SMP
                                </Typography>
                                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ex maxime, quibusdam hic pariatur similique accusantium voluptatum provident eveniet, corporis consequatur fugit repudiandae quidem corrupti minus dicta sed, doloribus quos?</Typography>
                            </Paper>
                            </ScrollAnimation>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <RepeatIcon />
                            </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                Repeat
                                </Typography>
                                <Typography>Because this is the life you love!</Typography>
                            </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        <Footer />
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
      backgroundColor: "#feb840"
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    opponent: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-start"
    },
    paperTypo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 100,
      padding: "15px 20px",
      backgroundColor: "#333333",
      border: "3px solid #feb840"
    },
    typo: {
      color: "#feb840",
      fontSize: 16
    },
    connector: {
      paddingBottom: 20,
    }
  }));
