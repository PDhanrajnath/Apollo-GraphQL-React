import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query user($userId: ID!) {
    user(id: $userId) {
      id
      name
    }
  }
`;

const LinkList = () => {
  // const userId = "2";
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: "1" },
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
