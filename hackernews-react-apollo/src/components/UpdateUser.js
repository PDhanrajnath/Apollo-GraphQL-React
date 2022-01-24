import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_USER, GET_USER } from "../gql/queries";

const UpdateUser = () => {
  const [updateUserId, setUserId] = useState("");
  const [updateUserName, setUserName] = useState("");
  const [createUser, { loading, error }] = useMutation(UPDATE_USER, {
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

  const updateUser = () => {
    createUser({
      variables: {
        updateUserId,
        updateUserName,
      },
    });
    window.location.reload();
  };

  return (
    <div>
      <hr />
      <h3>Update User </h3>
      <input
        type="text"
        value={updateUserId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="enter user id"
      />
      <br />
      <input
        type="text"
        value={updateUserName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="enter user name"
      />
      <br />
      <button onClick={updateUser} type="submit">
        Submit
      </button>
    </div>
  );
};

export default UpdateUser;
