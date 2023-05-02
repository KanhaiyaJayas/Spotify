import React, { useEffect } from "react";
import Logins from "./Components/Login";
import { useStateProvider } from "./utils/stateProvider";
import { reducerCases } from "./utils/Constants";
import Spotify from "./Components/Spotify";
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token)
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token]);
  return (
    <>
      <div>{token ? <Spotify /> : <Logins />}</div>
    </>
  );
}
