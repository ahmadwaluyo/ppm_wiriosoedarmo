import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import '../components/styles/NewsStyle.css';

export default function LatestNews () {
    const classes = useStyles();
    return (
        <section className="news">
            <div className="pt-5 pl-5">
                <h1 className="pt-5 pl-3">LATEST NEWS</h1>
                <hr className="pt-3" />
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-3">
                    <Card>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://kuliahditurki.com/wp-content/uploads/2018/06/universitas-selcuk-turki.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-3">
                    <Card >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://beritaturki.com/wp-content/uploads/2019/03/maxresdefault-1-4-1024x576.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>
                <div class="clearfix hidden-sm-down hidden-lg-up"></div>
                <div class="col-xs-12 col-md-6 col-lg-3">
                    <Card >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://kuliahditurki.net/wp-content/uploads/2020/02/uludag-university.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-3">
                    <Card >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://minanews.net/wp-content/uploads/2018/08/Daily-Sabah.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 180,
    },
  });