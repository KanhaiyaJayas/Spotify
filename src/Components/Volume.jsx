import styled from "styled-components";
import { useStateProvider } from "../utils/stateProvider";
import axios from "axios";

export default function Volume() {
  const [{ token }, dispatch] = useStateProvider();
  const setVolume = async (e) => {
    console.log(e);
    await axios.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {
            volume_percent: parseInt(e.target.value)
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  };
  return (
    <>
      <Container>
        <input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
      </Container>
    </>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
input {
    width: 15rem;
    border-radius: 2rem;
    height: 0.5rem;
`;
