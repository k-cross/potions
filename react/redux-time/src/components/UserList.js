import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserListElement from './UserListElement';

export default class UserList extends Component {
  render() {
    return (
     <table>
       <thead>
         <tr>
           <th>ID</th>
           <th>Username</th>
           <th>Job</th>
           <th>Edit</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody>
         {this.props.users.map((user, index) => {
           return(
             <UserListElement key={user.id} user={user}/>
           );
         })
        }
       </tbody>
     </table>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.object.isRequired
}
