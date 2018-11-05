import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import superAgent from 'superagent';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

export default class SettingsDrop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      image_url: "",
      title: "",
      description: "",
      tag_ids: [],
      open: false,
      user_id: this.props.session.currentUser.id,
      value: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
  }

  handleChange(event, index, value) {
    return this.setState({value});
  }

  handleLogout() {
    this.props.logout();
    window.location.reload();
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
    const hoverColor = '#00BCD4';

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
      <IconMenu className="settingsButton0"
        iconButtonElement={
          <IconButton className="settingsButton">
            <ActionSettings className="settingsButton2"
              color={changeColor}
              hoverColor={hoverColor}
               />
          </IconButton>
        }
        useLayerForClickAway={true}
        >
        <MenuItem primaryText="Log Out" onTouchTap={this.handleLogout}></MenuItem>
            </IconMenu>

  );
  }
}
