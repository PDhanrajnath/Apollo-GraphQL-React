import React, { Component } from "react";
import ListUsers from "./ListUsers";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

class App extends Component {
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

export default App;
