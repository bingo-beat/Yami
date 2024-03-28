import React from "react";

import videoBg from "./assets/videobg.mp4";

const App = () => {
  return (
    <div>
      <center>
        <video src={videoBg} autoPlay loop width="318" height="300" controls />
      </center>
    </div>
  );
};

export default App;
