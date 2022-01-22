import React, { Component } from "react";
import ListUsers from "./ListUsers";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
class App extends Component {
  render() {
    return (
      <>
        <AddUser />
        <ListUsers />
        <DeleteUser />
      </>
    );
  }
}

export default App;
