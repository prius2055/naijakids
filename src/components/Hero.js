import Buttonregister from "./buttons/Buttonregister";
import Buttonlogin from "./buttons/Buttonlogin";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-box">
        <h3>Learning is fun</h3>
        <h1>
          Learn new skills online
          <br />
          Find best course
        </h1>
        <div>
          <Buttonregister />
          <Buttonlogin />
        </div>
      </div>
    </div>
  );
};

export default Hero;
