import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    overflow: 'hidden',
  },
};


const FooterHome = () => (

  <div className= "footer1" style={styles.root}>
      <div className='footer-Wrap'> About
        <br></br>
        <h1 className='about'>
      Fish px is a web application inspired by 500px, an oceananic photography community
      based on discovering their own passion for taking photography, improving their skills, and
      above all having fun!
        </h1>
      </div>

      <div className='hover15'>
        <a className="hvr-grow" href="https://github.com/tianyuduan">Github</a>
        <h1 className="hvr-grow">Linkedin</h1>
        <h1>Contact</h1>
      </div>
  </div>
);

export default FooterHome;
