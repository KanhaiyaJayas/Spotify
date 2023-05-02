import React, { useEffect } from "react";
import { useStateProvider } from "../utils/stateProvider";
import axios from "axios";
export default function Playlists() {
  const [{ token, dispatch }] = useStateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    };

    getPlaylistData();
  }, [token, dispatch]);
  return (
    <>
      <div>Play List</div>
    </>
  );
}