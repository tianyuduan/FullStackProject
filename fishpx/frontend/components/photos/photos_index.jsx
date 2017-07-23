
import React from 'react';
import { withRouter } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ModalUpload from '../modal_upload/modal_upload.jsx';

class PhotosIndex extends React.Component {
  render() {


    const style = {
      marginRight: '80%'
    };

    return (
      <div>
      <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
      <ModalUpload></ModalUpload>
    </FloatingActionButton>
    </div>
    );
  }
}

export default PhotosIndex;
