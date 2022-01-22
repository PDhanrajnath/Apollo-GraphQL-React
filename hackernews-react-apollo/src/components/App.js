import React, { Component } from "react";
import ListUsers from "./ListUsers";
import AddUser from "./AddUser";
class App extends Component {
  render() {
    return (
      <>
        <AddUser />
        <ListUsers />
      </>
    );
  }
}

export default App;
