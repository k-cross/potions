import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserListElement extends Component {
  constructor(props) {
    super(props);
    this.modalDeleteShow = this.modalDeleteShow.bind(this);
  }
  render() {
    const user = this.props.user;
    return (
       <tr>
        <td>#{user.id}</td>
        <td>{user.username}</td>
        <td>{user.job}</td>
        <td><Link to={'/user-edit/' + user.id}>
          <Button bsSize="xsmall">
            Edit <Glyphicon glyph="edit"/> 
          </Button>
        </Link></td>
        <td><Button bsSize="xsmall" data-user={user.username} data-id={user.id}
          onClick={this.modalDeleteShow}>
          Delete <Glyphicon glyph="remove-circle"/>
        </Button></td>
      </tr>
    );
  }
  modalDeleteShow(event) {
    const user_id = Number(event.target.dataset.id);
    const username = event.target.dataset.username;
    this.props.dispatch({
      type: 'users.modalDeleteShow',
      id: user_id,
      username: username,
    });
  }
}

UserListElement.propTypes = {
  user: PropTypes.object.isRequired
}

export default connect() (UserListElement);
