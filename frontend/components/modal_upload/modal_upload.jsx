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

import FileUpload from 'material-ui/svg-icons/file/file-upload';

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

    this.props.createPhoto(this.state) ? (
        alert("Your Image has been processed!")
        ) : (
        alert("There was an error with the upload")
      )

    this.props.createPhoto(this.state);

    this.setState(
      { title: '',
        description: '',
        image_url: '',
        id: this.state.id + 1,
      });

    }

  handleNewRequest(request, index) {
    this.setState (
      {
        tag_ids: [...this.state.tag_ids, request.valueKey]
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
    this.props.fetchTags();
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
    const changeColor = 'white';
    const hoverColor = '#00FFFF';

    const finishModal = () => (
      this.props.createPhoto(this.state) ? (
          <Dialog
              className="completion_dialog"
              title="Done!"
              modal={true}
              open={this.state.open}
            >
            Thank you for uploading! Your image has been processed to sent to the appropriate category.
            </Dialog>
          ) : (
          <Dialog
            className="completion_dialog"
            title="Done!"
            modal={true}
            open={this.state.open}
          >
          There was an error with the upload.
          </Dialog>
          )
    );

    const innerText = this.state.image_url === '' ? (
      <h1 className="clickheretoUpload">Click here to upload!</h1>
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
        <FileUpload label="Upload"
          className="upload"
          onTouchTap={this.handleOpen}
          color={changeColor}
          hoverColor={hoverColor}
          label="Upload"
           style={{width: "35px", height: "35px"}}
          />
          <Dialog
            className="dialogPhotoUpload"
            title="Select a Photo "
            actions={actions}
            modal={true}
            open={this.state.open}
          >
          <div className="dropzoneWrapper">
          <DropZone
            accept="image/*"
            multiple= {false}
            onDrop={this.uploadFile}
            >
            {innerText}
          </DropZone>
          </div>

          <div className="inputWrapper">
        <span className="title-form">Title:</span><span className='form-spacing-title'></span>
         <span><TextField id={this.state.title} className="image_title_text_field" type="text"
           value={this.state.title}
           onChange={this.update('title')}
           className="title-input"
           hintText="   Please type your title "
           /></span>
         <br></br>
         <span className="desc-form">Description:</span><span className='form-spacing-desc'></span>
         <span><TextField id={this.state.description} className="image_description_text_field" type="text"
           value={this.state.description}
           onChange={this.update('description')}
           className="description-input"
           hintText="   Please type your description"
           /></span>
         <br></br>
         <div className="categoryWrapper">
           <span className="Category">Category:</span><span className='form-spacing-category'></span>
           <div className='category-auto'>
             <AutoCompleteData id={this.state.tag_names}
             className="image_title_text_field" type="text"
             value={this.state.tag_names}
             onChange={this.update('tag_ids')}
             onNewRequest={this.handleNewRequest}
             tagData={this.props.tagData}
             />
            </div>
           </div>
         </div>
          </Dialog>
      </div>
    );
  }
}

export default withRouter(ModalUpload);
