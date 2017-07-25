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
      open: false,
      user_id: this.props.session.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();

    // let data = {
    //   title:
    //   description:
    //   user_id:
    //   image_url:
    // };

    this.setState(
      { title: '',
        description: '',
        image_url: '',
        id: this.state.id + 1,
      });

    this.props.createPhoto(this.state);

  }

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

      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
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

          <label className="Title">Title:</label>
         <TextField id={this.state.title} className="image_title_text_field" type="text"
           value={this.state.title}
           onChange={this.update('title')}
           className="title-input"
           hintText="Type Your Title! "
           />
          </Dialog>
      </div>
    );
  }
}

export default withRouter(ModalUpload);
