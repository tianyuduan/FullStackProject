import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {cyan500, transparent, grey50} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import DropZone from 'react-dropzone';
import superAgent from 'superagent';

class ModalUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      image_url: "",
      title: "",
      description: "",
      tags: ""
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  // handleUpload(e){
  //   e.preventDefault();
  //   this.props.createPhoto(this.state);
  //   this.setState({title: '', description: '', id: this.state.id + 1});
  //
  // }

  uploadFile(image) {
    const imageUpload = image[0];
    const CLOUDINARY_URL = 	'https://api.cloudinary.com/v1_1/djubcegxh/image/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'jgyw65qw';

    let uploadRequest = superAgent.post(CLOUDINARY_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', imageUpload);

                      uploadRequest.end((err, response) => {
                        if (response.body.secure_url !== "") {
                          this.setState({
                            image_url: response.body.secure_url
                          });
                        }
                        });

// uploadRequest.then(function(res){
//   this.setState({
//     image_url: res.body.secure_url
//   })
//
// })

  }

  componentDidMount() {

  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.props);

    const innerText = this.state.image_url === '' ? (
      <h1>Drop here</h1>
    ) : (
      <img src={this.state.image_url}></img>
    );

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    const {image_url} = this.state;

    return (


      <div>
        <RaisedButton label="Upload" onTouchTap={this.handleOpen} />
          <Dialog
            title="Image Upload Here"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
          <DropZone
            accept="image/*"
            multiple= {false}
            onDrop={this.uploadFile}
            >
            {innerText}

          </DropZone>
          </Dialog>
      </div>
    );
  }
}

export default withRouter(ModalUpload);
