import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import PhotosIndexContainer from '../photos/photos_index_container.js';
import SeascapeContainer from '../tabs/seascape_container.js';
import OtherContainer from '../tabs/other_container.js';
import WildlifeContainer from '../tabs/wildlife_container.js';
import PeopleContainer from '../tabs/people_container.js';
import DiscoverContainer from '../tabs/discover_container.js';
import CircularProgressSimple from '../widgets/loading.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {

  },
  tabs: {
  },
  tab: {
    backgroundColor: 'white',
    color: "gray",
    fontSize: 14,
  },
  circle: {
    justifyContent: 'center',
    color: "green",
    border: "2px green",
  }
};


class TabsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      position: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }

  componentDidMount() {
    let myVar = setTimeout(()=> this.setState({position: 1}), 2000);
  }

 switchTab(state) {
  switch(state) {
    case 1:
      return <SeascapeContainer/>;
    case 2:
      return <WildlifeContainer/>;
    case 3:
      return <PeopleContainer/>;
    case 4:
      return <OtherContainer/>;
    case 5:
      return <PhotosIndexContainer/>;
    default:
      return <DiscoverContainer/>;
  }
}

  render() {
      if (this.state.position == 1 ) {
        return (
          <div>
            <Tabs
              className="allTabs"
              onChange={this.handleChange}
              value={this.state.slideIndex}
              style={styles.tabs}
            >
              <Tab className="Discover" label="Discover" value={0}
                style={styles.tab}
                />
              <Tab className="Seascape" label="Seascape" value={1}
                style={styles.tab}
                />
              <Tab className="WildLife" label="WildLife" value={2}
                style={styles.tab} />
              <Tab className="People" label="People" value={3}
                style={styles.tab} />
              <Tab className="Others" label="Others" value={4}
                style={styles.tab}/>
              <Tab className="AllUserUploads" label="All User Uploads" value={5}
                style={styles.tab} />
            </Tabs>

            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleChange}
            >
              <div className="tabsCssss" >
                <DiscoverContainer/>;
              </div>
              <div className="tabsCssss" >
                {this.switchTab(this.state.slideIndex)}
              </div>
              <div className="tabsCssss" >
                {this.switchTab(this.state.slideIndex)}
              </div>
              <div className="tabsCssss" >
                {this.switchTab(this.state.slideIndex)}
              </div>
              <div className="tabsCssss" >
                {this.switchTab(this.state.slideIndex)}
              </div>
              <div className="tabsCssss" >
                {this.switchTab(this.state.slideIndex)}
              </div>
            </SwipeableViews>
          </div>
        );
      } else {
        return(
          <div className="circularProgress">
          <CircularProgressSimple></CircularProgressSimple>
          </div>
        );
      }
  }
}

export default TabsView;
