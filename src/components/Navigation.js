import Buttonregister from "./buttons/Buttonregister";
import { BsBookFill, BsSearch } from "react-icons/bs";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-box">
        <div className="navigation-box__logo">
          <BsBookFill />
          <h1>9IJAKIDS</h1>
        </div>

        <nav className="navigation-box__navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Games</li>
            <li>Competition</li>
          </ul>
          <Buttonregister />
          <BsSearch className="navigation-box__search" />
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
