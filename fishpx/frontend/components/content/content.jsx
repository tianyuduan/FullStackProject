import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    overflow: 'hidden',
  },
};


const ContentHome = () => (

  <div className= "Video">
    <h1 className= "video_font_1">Explore Another World</h1>
    <h1 className= "video_font_2">Discover the depths of the unknown</h1>
    <video autoPlay loop>
    <source src="http://res.cloudinary.com/djubcegxh/video/upload/v1500601586/featured-vid_pnhmuh.mp4"
      type="video/mp4"
      ></source>
    </video>
  </div>
);

export default ContentHome;
