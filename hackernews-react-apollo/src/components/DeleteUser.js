import { useMutation } from "@apollo/client";
import { useState } from "react";
import { GET_USER } from "../gql/getUser.js";
import { DELETE_USER } from "../gql/deleteUser.js";

const DeleteUser = () => {
  const [deleteUserId, setDeleteUserId] = useState("");
  const [deleteUser, { loading, error }] = useMutation(DELETE_USER, {
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

  const delUser = () => {
    deleteUser({
      variables: {
        deleteUserId: deleteUserId,
      },
    });
    window.location.reload();
  };

  return (
    <div>
      <hr></hr>
      <h3>Delete User </h3>
      <input
        type="text"
        value={deleteUserId}
        onChange={(e) => setDeleteUserId(e.target.value)}
        placeholder="enter user id"
      />
      <br></br>
      <button onClick={delUser} type="submit">
        Submit
      </button>
    </div>
  );
};

export default DeleteUser;
