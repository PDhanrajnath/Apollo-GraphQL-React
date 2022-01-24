import { useQuery } from "@apollo/client";
import { GET_USER } from "../gql/queries";
import Link from "./link";

const ListUsers = () => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) {
    return <div>Loading . . . </div>;
  }
  if (error) {
    return <div>Error !!! {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <>
          <hr />
          <h3>List of Users</h3>
          {data.allUsers.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListUsers;
