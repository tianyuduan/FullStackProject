import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import PhotosIndexContainer from '../photos/photos_index_container.js';
import SeascapeContainer from '../tabs/seascape_container.js';
import OtherContainer from '../tabs/other_container.js';
import WildlifeContainer from '../tabs/wildlife_container.js';
import PeopleContainer from '../tabs/people_container.js';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
  },
};


class TabsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }



  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Popular" value={0} />
          <Tab label="Seascape" value={1} />
          <Tab label="WildLife" value={2} />
          <Tab label="People" value={3} />
          <Tab label="Others" value={4} />
          <Tab label="User Uploads" value={5} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div className="tabsCssss">
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            <SeascapeContainer></SeascapeContainer>
          </div>
          <div style={styles.slide}>
            <WildlifeContainer></WildlifeContainer>
          </div>
          <div style={styles.slide}>
            <PeopleContainer></PeopleContainer>
          </div>
          <div style={styles.slide}>
            <OtherContainer></OtherContainer>
          </div>
          <div style={styles.slide}>
          <PhotosIndexContainer/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default TabsView;
