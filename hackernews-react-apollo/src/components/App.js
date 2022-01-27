import React from "react";
import AppPage from "./AppPage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      {isAuthenticated | isLoading ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
      {isAuthenticated && <AppPage />}
    </>
  );
}

export default App;
