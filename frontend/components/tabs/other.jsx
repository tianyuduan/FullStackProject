
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

class Other extends React.Component {
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

  handleOpen(url, description, title) {
    this.setState({open: true,
       title: title,
       description: description,
       image_url:url
     });
  }

  handleClose() {
    this.setState({open: false});
  }


  render() {

    const customContentStyle = {
    width: '75%',
    maxWidth: 'none',
  };

    let masonryOptions = {
        transitionDuration: 0,
        gutter: 20,
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


      const modal = () => (

        <Dialog
          title={this.state.title}
          actions={actions}
          open={this.state.open}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={false}
          onRequestClose={this.handleClose}
          >
          <img src={this.state.image_url}  />
        </Dialog>

      );

      function toTitleCase(str)
      {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

    let elements = this.state.photosLists.map((tile) => (
      <li className="imageGridUser">
        <h1 className="imageGridTitle">{toTitleCase(tile.title)}</h1>
          <img src={tile.image_url}
            onClick={this.handleOpen.bind(this, tile.image_url, tile.description, tile.title)}
            key={tile.image_url}
            ></img>
        </li>
    )
    );



    return (
      <Masonry
          className={'my-gallery-class'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
      >
          {elements}
          {modal()}
      </Masonry>
  );

  }
}

export default Other;
