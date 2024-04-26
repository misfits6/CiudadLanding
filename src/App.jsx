import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Novatrix, Opulento, Tranquiluxe } from "uvcanvas";

import videoBg from "./assets/Entropia.mp4";

function App() {
  return (
    <>
      <div className="flex justify-center items-center align-middle">
        {/* <img
          className=" justify-center items-center align-middle"
          src="entropia.jpeg"
          alt=""
        /> */}
        <video src={videoBg} autoPlay loop muted />
      </div>

      <div className="bg-inherit">
        <Novatrix />
      </div>
    </>
  );
}

export default App;
