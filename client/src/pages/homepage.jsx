import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import PopularCard from "../components/popularCard";

function Homepage() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  const useStyles = makeStyles({
    spinner: {
      position: "fixed",
      top: "50%",
      left: "50%",
    },
    title: {
      padding: "10px",
    },
  });

  const getPopular = () => {
    axios
      .get("http://localhost:3030/api/v1/anime/popular/1", {
        onDownloadProgress: setLoading(true),
      })
      .then((res) => {
        setLoading(false);
        setPopular(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPopular();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography className={classes.title} variant="h5">
            Most Popular Anime
          </Typography>
        </Grid>
        {loading ? (
          <CircularProgress className={classes.spinner} color="secondary" />
        ) : (
          popular.map((anime, index) => (
            <Grid item key={index} xs={12} md={6} lg={3}>
              <PopularCard
                name={anime.name}
                img={anime.img}
                rel={anime.release}
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default Homepage;
