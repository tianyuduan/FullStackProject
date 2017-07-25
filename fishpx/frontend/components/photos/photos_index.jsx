
import React from 'react';
import { withRouter } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ModalUpload from '../modal_upload/modal_upload.jsx';


import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class PhotosIndex extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
       title: "",
       description: "",
       image_url: "",
       tags: "",
       photosLists: props.photos
      };
    }

  componentWillReceiveProps(nextProps) {
// on update
  this.setState({photosLists: nextProps.photos});
  console.log(nextProps);
  }

  componentDidMount() {
    this.props.fetchPhotos(
      this.props.session.currentUser.id);
  }

  render() {
    const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: 'auto',
    },
  };

    const { photos, session } = this.props;
    let imageGrid = this.state.photosLists.map((photo, idx) => (
      <div key={idx} className="Igrid">
      <img src={photo.image_url} style={{width: "300px", height: "300px"}}/>
      </div>
    ));


    return (
      <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>User Uploads</Subheader>
      {this.state.photosLists.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.image_url} />
        </GridTile>
      ))}
    </GridList>
  </div>
  );

  }
}

export default PhotosIndex;
