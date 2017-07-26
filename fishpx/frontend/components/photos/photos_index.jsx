
import React from 'react';
import { withRouter } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ModalUpload from '../modal_upload/modal_upload.jsx';
import CircularProgressSimple from '../widgets/loading.jsx';
import Masonry from 'react-masonry-component';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';



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
       open: false,
       photosLists: props.photos
      };
      this.componentDidMount = this.componentDidMount.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

  componentWillReceiveProps(nextProps) {
// on update
  this.setState({photosLists: nextProps.photos});
  }

  componentDidMount() {
    this.props.fetchPhotos(
      this.props.session.currentUser.id);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }


  render() {

    let masonryOptions = {
        transitionDuration: 0,
        gutter: 20,
        // columnWidth: 1000,
        fitWidth: true
    };

    const { photos, session } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      ];

    let elements = this.state.photosLists.map((tile) => (
      <li className="imageGridUser">
          <img src={tile.image_url}
            onClick={this.handleOpen}
            key={tile.image_url}
            ></img>
          <Dialog
            title={tile.title}
            actions={actions}
            modal={true}
            open={this.state.open}
            >
            <img src={tile.image_url}/>
          </Dialog>
        </li>
    )
  );

 //  let willRender = () => (
 // (this.state.photosLists) ?
 // <Masonry
 //     className={'my-gallery-class'}
 //     elementType={'ul'}
 //     options={masonryOptions}
 //     disableImagesLoaded={false}
 //     updateOnEachImageLoad={false}
 // >
 //     {elements}
 // </Masonry>
 //   : <CircularProgressSimple/>
 //  );


    return (
      <Masonry
          className={'my-gallery-class'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
      >
          {elements}
      </Masonry>
  );

  }
}

export default PhotosIndex;
