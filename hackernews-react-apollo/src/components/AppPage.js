import React, { Component } from "react";
import ListUsers from "./ListUsers";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import auth from "../Auth/Auth";

class AppPage extends Component {
  render() {
    const res = auth.getIdToken();

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
