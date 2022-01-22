import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_USER } from "../gql/addUser.js";
import { GET_USER } from "../gql/getUser.js";

const AddUser = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [createUser, { loading, error }] = useMutation(ADD_USER, {
    refetchQueries: [
      {
        query: GET_USER,
      },
    ],
  });
  if (loading) {
    return <div>Loading . . . </div>;
  }
  if (error) {
    return <div>Error !!! {error.message}</div>;
  }

  const addNewUser = () => {
    createUser({
      variables: {
        userId,
        userName,
      },
    });
    window.location.reload();
  };

  return (
    <div>
      <h3>Add User </h3>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="enter user id"
      />
      <br></br>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="enter user name"
      />
      <br></br>
      <button onClick={addNewUser} type="submit">
        Submit
      </button>
    </div>
  );
};

export default AddUser;
