import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ModalUploadContainer from '../modal_upload/modal_upload_container.js';

import DropDownMenuOpen from './drop_down.jsx';
import logOut from '../greeting/greeting.jsx';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

export default class AvatarCurrentUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
    this.handleChange = this.handleChange.bind(this);
    // this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleChange(event, index, value) {
    return this.setState({value});
  }




  render() {
    const handleDropDown = () => (
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
        <ModalUploadContainer value={1} primaryText="Upload" />
        <MenuItem value={2}
          primaryText="Logout"
          color="white" />
      </DropDownMenu>
    );

    return (
  <List>
    <ListItem className="Avatar"
      disabled={true}
      onClick={handleDropDown}
      leftAvatar={
      <Avatar src="http://res.cloudinary.com/djubcegxh/image/upload/v1501020561/useravatar_aczmuj.svg" />
      }
    >
    </ListItem>
  </List>
  );
  }
}
