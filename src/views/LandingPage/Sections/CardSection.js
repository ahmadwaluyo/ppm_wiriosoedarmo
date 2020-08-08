import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// @material-ui/icons
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Chat from '@material-ui/icons/Chat';

// core components
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography } from '@material-ui/core';

import { title } from "assets/jss/material-kit-react.js";

export default function TeamSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Pojok Santri</h2>
      <br />
      <div className="d-flex row justify-content-around flex-wrap text-left">
        <div className="d-flex row">
          <div className="col-md-6">
            <CardMedia
              className={classes.media}
              image="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx"
              title="Paella dish"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                UI {"&"} UX, Mana yang lebih penting?
              </Typography>
              <Typography variant="body3" color="textSecondary" component="h5">
                Istilah UI dan UX saat ini memang sedang populer. 
                Meskipun mirip tetapi mungkin banyak yang belum tahu perbedaan di antara keduanya.{" "}
                <Link to="/" className={classes.readMore}>Read More ...</Link>
              </Typography>
            </CardContent>
            <CardHeader
              className={classes.author}
              avatar={
                <Avatar aria-label="recipe">
                  <img src="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx" alt="img" width="80px" />
                </Avatar>
              }
              title="Shrimp Paella"
              subheader="September 14, 2016"
            />
          </div>
          <div className="col-md-6">
            <CardMedia
              className={classes.media}
              image="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx"
              title="Paella dish"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                UI {"&"} UX, Mana yang lebih penting?
              </Typography>
              <Typography variant="body3" color="textSecondary" component="h5">
                Istilah UI dan UX saat ini memang sedang populer. 
                Meskipun mirip tetapi mungkin banyak yang belum tahu perbedaan di antara keduanya.{" "}
                <Link to="/" className={classes.readMore}>Read More ...</Link>
              </Typography>
            </CardContent>
            <CardHeader
              className={classes.author}
              avatar={
                <Avatar aria-label="recipe">
                  <img src="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx" alt="img" width="80px" />
                </Avatar>
              }
              title="Shrimp Paella"
              subheader="September 14, 2016"
            />
          </div>

        </div>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx"
            title="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              UI {"&"} UX, Mana yang lebih penting?
            </Typography>
            <Typography variant="body3" color="textSecondary" component="h5">
              Istilah UI dan UX saat ini memang sedang populer. 
              Meskipun mirip tetapi mungkin banyak yang belum tahu perbedaan di antara keduanya.{" "}
              <Link to="/" className={classes.readMore}>Read More ...</Link>
            </Typography>
          </CardContent>
          <CardHeader
            className={classes.author}
            avatar={
              <Avatar aria-label="recipe">
                <img src="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx" alt="img" width="80px" />
              </Avatar>
            }
            title="Shrimp Paella"
            subheader="September 14, 2016"
          />
          </Card>

          <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx"
            title="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              UI {"&"} UX, Mana yang lebih penting?
            </Typography>
            <Typography variant="body3" color="textSecondary" component="h5">
              Istilah UI dan UX saat ini memang sedang populer. 
              Meskipun mirip tetapi mungkin banyak yang belum tahu perbedaan di antara keduanya.{" "}
              <Link to="/" className={classes.readMore}>Read More ...</Link>
            </Typography>
          </CardContent>
          <CardHeader
            className={classes.author}
            avatar={
              <Avatar aria-label="recipe">
                <img src="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx" alt="img" width="80px" />
              </Avatar>
            }
            title="Shrimp Paella"
            subheader="September 14, 2016"
          />
          </Card>

          <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx"
            title="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              UI {"&"} UX, Mana yang lebih penting?
            </Typography>
            <Typography variant="body3" color="textSecondary" component="h5">
              Istilah UI dan UX saat ini memang sedang populer. 
              Meskipun mirip tetapi mungkin banyak yang belum tahu perbedaan di antara keduanya.{" "}
              <Link to="/" className={classes.readMore}>Read More ...</Link>
            </Typography>
          </CardContent>
          <CardHeader
            className={classes.author}
            avatar={
              <Avatar aria-label="recipe">
                <img src="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx" alt="img" width="80px" />
              </Avatar>
            }
            title="Shrimp Paella"
            subheader="September 14, 2016"
          />
          </Card>

          <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx"
            title="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              UI {"&"} UX, Mana yang lebih penting?
            </Typography>
            <Typography variant="body3" color="textSecondary" component="h5">
              Istilah UI dan UX saat ini memang sedang populer. 
              Meskipun mirip tetapi mungkin banyak yang belum tahu perbedaan di antara keduanya.{" "}
              <Link to="/" className={classes.readMore}>Read More ...</Link>
            </Typography>
          </CardContent>
          <CardHeader
            className={classes.author}
            avatar={
              <Avatar aria-label="recipe">
                <img src="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx" alt="img" width="80px" />
              </Avatar>
            }
            title="Shrimp Paella"
            subheader="September 14, 2016"
          />
          </Card>

          <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx"
            title="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              UI {"&"} UX, Mana yang lebih penting?
            </Typography>
            <Typography variant="body3" color="textSecondary" component="h5">
              Istilah UI dan UX saat ini memang sedang populer. 
              Meskipun mirip tetapi mungkin banyak yang belum tahu perbedaan di antara keduanya.{" "}
              <Link to="/" className={classes.readMore}>Read More ...</Link>
            </Typography>
          </CardContent>
          <CardHeader
            className={classes.author}
            avatar={
              <Avatar aria-label="recipe">
                <img src="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx" alt="img" width="80px" />
              </Avatar>
            }
            title="Shrimp Paella"
            subheader="September 14, 2016"
          />
          </Card>

          <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx"
            title="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              UI {"&"} UX, Mana yang lebih penting?
            </Typography>
            <Typography variant="body3" color="textSecondary" component="h5">
              Istilah UI dan UX saat ini memang sedang populer. 
              Meskipun mirip tetapi mungkin banyak yang belum tahu perbedaan di antara keduanya.{" "}
              <Link to="/" className={classes.readMore}>Read More ...</Link>
            </Typography>
          </CardContent>
          <CardHeader
            className={classes.author}
            avatar={
              <Avatar aria-label="recipe">
                <img src="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx" alt="img" width="80px" />
              </Avatar>
            }
            title="Shrimp Paella"
            subheader="September 14, 2016"
          />
          </Card>
      </div>
      <br />
      <div className="d-flex justify-content-start">
        <Typography variant="body3" color="textSecondary" component="h5">Latest</Typography>
      </div>
      <hr className={classes.hr} />
      <br />
      <div className="d-flex flex-row">
        <div className="col-md-8">
          <CardMedia
            className={classes.media}
            image="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx"
            title="Paella dish"
          />
        </div>
        <div className="col-md-4 text-left">
          <CardContent>
            <Typography variant="h5" color="textPrimary" component="h5">
              UI {"&"} UX, Mana yang lebih penting?
            </Typography>
            <br />
            <Typography variant="body3" color="textSecondary" component="h5">
              Istilah UI dan UX saat ini memang sedang populer. 
              Meskipun mirip tetapi mungkin banyak yang belum tahu perbedaan di antara keduanya.{" "}
              <Link to="/" className={classes.readMore}>Read More ...</Link>
            </Typography>
          </CardContent>
          <CardHeader
            className={classes.author}
            avatar={
              <Avatar aria-label="recipe">
                <img src="https://miro.medium.com/max/1000/0*5fukrioa4Qd-dDpx" alt="img" width="80px" />
              </Avatar>
            }
            title="Shrimp Paella"
            subheader="September 14, 2016"
          />
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 20
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
    color: "#292929"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  author: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  readMore: {
    color: "#333333",
    fontWeight: 500
  },
  hr: {
    border: "1px solid #f1f1f1"
  }
}));