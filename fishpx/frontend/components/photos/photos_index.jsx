
import React from 'react';
import { withRouter } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ModalUpload from '../modal_upload/modal_upload.jsx';

class PhotosIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       title: "",
       description: "",
       image_url: "",
       tags: "",
      };
    }

  componentWillReceiveProps() {
//on update
  }

  componentDidMount() {
    this.props.fetchPhotos(
      this.props.session.currentUser.id);
  }

  render() {
    console.log(this.props );
    const { photos, session } = this.props;

      let timer1;
      let grid;
      let timer2 = this.props.photos;

      console.log(timer2);
      if (timer2) {
        timer1 = timer2;
        console.log(this.props);
      }
      else {
        return null;
      }
      
      grid = timer1.map((image) => (
        <div>
          <img src={image.image_url}></img>
        </div>
      ));

      if (this.props) {
        console.log(this.props);
      }

    // console.log(grid);
    return (
    <div>
      {grid}
    </div>
  );

  }
}

export default PhotosIndex;
