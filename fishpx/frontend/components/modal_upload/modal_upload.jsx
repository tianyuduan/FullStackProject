import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {cyan500, transparent, grey50} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import AutoCompleteData from './auto_complete_tags.jsx';

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
      tag_ids: [],
      open: false,
      user_id: this.props.session.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState(
      { title: '',
        description: '',
        image_url: '',
        id: this.state.id + 1,
      });

    this.props.createPhoto(this.state);
  }

  handleNewRequest(request, index) {
    let arr = this.state.tag_ids;
    arr.push(index + 13);

    this.setState (
      {
        tag_ids: arr
      }
    );

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

      <div className="uploadWrapper">
        <FlatButton label="Upload"
          className="upload"
          onTouchTap={this.handleOpen}
          label="Upload"
            labelStyle={{ color: 'white',
              fontSize: 14,
              fontFamily: "sans-serif",
              fontWeight: "bold",
              textShadow: "1px 1px #0C090A"
            }}
            disabled={false}
            className="upload"
            style={{width: '150px',
              borderRadius: "10px"
              }}
          />
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
         <label className="Description">Description:</label>
         <TextField id={this.state.description} className="image_description_text_field" type="text"
           value={this.state.description}
           onChange={this.update('description')}
           className="description-input"
           hintText="Type Your Description! "
           />
         <br></br>
         <label className="Tags">Tags:</label>
         <AutoCompleteData id={this.state.tag_names} className="image_title_text_field" type="text"
           value={this.state.tag_names}
           onChange={this.update('tag_ids')}
           className="tag-input"
           hintText="Type Your Tag! "
           onNewRequest={this.handleNewRequest}
           />
          </Dialog>
      </div>
    );
  }
}

export default withRouter(ModalUpload);
