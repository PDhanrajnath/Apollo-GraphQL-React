import React, { Component } from "react";
import ListUsers from "./ListUsers";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

class AppPage extends Component {
  render() {
    return (
      <>
        <AddUser />
        <ListUsers />
        <DeleteUser />
        <UpdateUser />
      </>
    );
  }
}

export default AppPage;
