import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import video from "./vid.mp4";
import Accordion from "./components/Accordion";
import img from "./components/wallpaperflare.com_wallpaper (1).jpg";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: img,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/*<div className="vid">
      <video className='videoTag' autoPlay loop muted>
      <source src={video} type='video/mp4' />
      </video>
      </div>
      <CssBaseline />
      <Header />
  <PlaceToVisit />*/}
      <Accordion />
    </div>
  );
}
