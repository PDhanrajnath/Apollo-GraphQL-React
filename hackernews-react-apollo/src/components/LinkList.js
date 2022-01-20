import { useQuery, gql } from "@apollo/client";
// import React from 'react';
// import Link from "./link";

const GET_USER = gql`
  {
    user(id: "2") {
      id
      name
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(GET_USER);
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

// const LinkList = () => {
//   const linksToRender = [
//     {
//       id: '1',
//       title:
//         'Prisma gives you a powerful database toolkit 😎',
//       author: 'https://prisma.io'
//     },
//     {
//       id: '2',
//       title: 'The best GraphQL client',
//       author: 'https://www.apollographql.com/docs/react/'
//     }
//   ];

//   return (
//     <div>
//       {linksToRender.map((link) => (
//         <Link key={link.id} link={link} />
//       ))}
//     </div>
//   );
// };

export default LinkList;
