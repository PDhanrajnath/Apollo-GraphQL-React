import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Auth0ProviderWithHistory from "./Auth/Auth";

// 1 - apollo client import
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
// import { onError } from "@apollo/client/link/error";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`GraphQL Error !!! ${message}`);
//     });
//   }
// });
// 2 - creating endpoint for server
const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

// 3 - bringing up new instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  // 4 - binding up pollo provider with passing client instance
  <Auth0ProviderWithHistory>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Auth0ProviderWithHistory>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
