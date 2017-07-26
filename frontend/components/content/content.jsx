import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Scroll from 'react-scroll';

class ContentHome extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(window.innerHeight + 100, {
      duration: 1000,
      delay: 100,
      smooth: true
    });
  }

render() {

return (

  <div className= "Video">
    <h1 className= "video_font_1">Explore Another World</h1>
    <h1 className= "video_font_2">Discover the depths of the unknown</h1>
    <video autoPlay loop>
    <source src="http://res.cloudinary.com/djubcegxh/video/upload/v1500601586/featured-vid_pnhmuh.mp4"
      type="video/mp4"
      ></source>
    </video>
    <div className='showbuttonWrapper'>
    <div className='showbutton'>
      <RaisedButton
        className='show-button'
        label="SHOW MORE"
        labelPosition="before"
        primary={true}
        onClick={this.handleScroll}
        labelStyle={{ color: 'white',
          fontSize: 16,
          fontFamily: "sans-serif",
          fontWeight: "bold",
        }}
        style={{width: '220px',
          boxShadow: "2px 2px 1px #424242"
        }}
      />
    </div>
    </div>
  </div>
);

  }
}


export default ContentHome;
