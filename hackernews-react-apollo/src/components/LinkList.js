import { useQuery } from "@apollo/client";
import { GET_USER } from "../gql/getUser.js";

const LinkList = () => {
  const userId = "2";
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: userId },
  });
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
          <div>
            <p>
              id: {data.user.id}
              <br></br>name: {data.user.name}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default LinkList;
