import React from "react";

import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p> About me, about this app, about this world and about everything</p>
    </div>
  );
};

export default Rainbow(About);
