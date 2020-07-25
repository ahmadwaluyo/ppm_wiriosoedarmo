import React from "react";
// card plugin
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

//animation
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

//css
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const classes2 = useStyles2();
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration=".5">
            <div className={classes2.titleNews}>Last News</div>
            <hr className={classes.hr} />
          </ScrollAnimation>
        </div>
        <div class="row mt-5">
              <div class="col-xs-12 col-md-6 col-lg-3">
                <ScrollAnimation animateIn="fadeInUp" animateOnce="true" duration="1">
                    <CardActionArea>
                        <CardMedia
                        className={classes2.media}
                        image="https://kuliahditurki.com/wp-content/uploads/2018/06/universitas-selcuk-turki.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </ScrollAnimation>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-3">
                  <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="1.5">
                  <CardActionArea>
                      <CardMedia
                      className={classes2.media}
                      image="https://beritaturki.com/wp-content/uploads/2019/03/maxresdefault-1-4-1024x576.jpg"
                      title="Contemplative Reptile"
                      />
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                      </Typography>
                      </CardContent>
                  </CardActionArea>
              </ScrollAnimation>
              </div>
              <div class="clearfix hidden-sm-down hidden-lg-up"></div>
              <div class="col-xs-12 col-md-6 col-lg-3">
                  <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="2">
                  <CardActionArea>
                      <CardMedia
                      className={classes2.media}
                      image="https://kuliahditurki.net/wp-content/uploads/2020/02/uludag-university.jpg"
                      title="Contemplative Reptile"
                      />
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                      </Typography>
                      </CardContent>
                  </CardActionArea>
              </ScrollAnimation>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-3">
                  <ScrollAnimation animateIn='fadeInUp' animateOnce="true" duration="2.5">
                  <CardActionArea>
                      <CardMedia
                      className={classes2.media}
                      image="https://minanews.net/wp-content/uploads/2018/08/Daily-Sabah.jpg"
                      title="Contemplative Reptile"
                      />
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                      </Typography>
                      </CardContent>
                  </CardActionArea>
              </ScrollAnimation>
              </div>
          </div>
      </div>
    </div>
  );
}

const useStyles2 = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  titleNews: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  }
}));