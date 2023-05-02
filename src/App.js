import React, { useEffect } from "react";
import Logins from "./Components/Login";
import { useStateProvider } from "./utils/stateProvider";
export default function App() {
  const [{}, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if(hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
    }
  },[])
  return (
    <>
      <div>
        <Logins />
      </div>
    </>
  );
}
