import { HiLocationMarker, HiMail } from "react-icons/hi";
import { ImFacebook, ImPinterest, ImTwitter } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-box">
        <div className="header-box__location">
          <HiLocationMarker />
          <p>9ijakids Lane, Lagos</p>
        </div>
        <div className="header-box__address">
          <HiMail />
          <p>9ijakids Lane, Lagos</p>
        </div>

        <div className="icons">
          <div>
            <ImFacebook />
          </div>
          <div>
            <ImPinterest />
          </div>
          <div>
            <ImTwitter />
          </div>
          <div>
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
