import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {cyan500, transparent, grey50} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class ModalCreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    title: "",
     description: "",
     image_url: "",
     tags: "",
     open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState({title: '', body: '',
      image_url: '', id: this.state.id + 1});
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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onClick ={this.handleSubmit}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Submit" onTouchTap={this.handleOpen} />
        <Dialog
          title="Finalize options here"
          actions={actions}
          modal={true}
          open={this.state.open}
        >

        <br></br>
        <label className="Title">Title:</label>
          <TextField id={this.state.title} className="image_title_text_field" type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className="title-input"
            hintText="Type Your Title! "
            />

          <br/>
          <label className="Description">Description:</label>
            <TextField id={this.state.description} className="image_description_text_field" type="text"
              value={this.state.description}
              onChange={this.update('description')}
              className="description-input"
              hintText="Type Your Description! "
              />

            <br/>
              <label className="Tags">Tags:</label>
                <TextField id={this.state.tags} className="image_tags_text_field" type="text"
                  value={this.state.tags}
                  onChange={this.update('tags')}
                  className="tags-input"
                  hintText="Type Your tags! "
                  />
                <br/>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(ModalCreateForm);
