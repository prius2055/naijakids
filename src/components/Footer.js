import "./Footer.css";
import "./Header.css";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { ImFacebook, ImPinterest, ImTwitter } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-box__top">
          <div>
            <h3>9ijakids</h3>
            <ul>
              <li>
                <HiLocationMarker />
                <a href="#">9ijakids lane</a>
              </li>
              <li>
                <HiMail />
                <a href="#">9ijakids@test.com</a>
              </li>
              <li>
                <HiPhone />
                <a href="#">phone 9ijakids</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>
                <a href="#"> learners</a>{" "}
              </li>
              <li>
                <a href="#">partners</a>{" "}
              </li>
              <li>
                <a href="#"> developers</a>{" "}
              </li>
              <li>
                <a href="#">beta testers</a>{" "}
              </li>
              <li>
                <a href="#">translators</a>{" "}
              </li>
              <li>
                <a href="#"> blog</a>{" "}
              </li>
              <li>
                <a href="#"> tech blog</a>
              </li>
              <li>
                <a href="#">teaching center</a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3>Informations</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>More</h3>
            <ul>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Directory</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-box__bottom">
          <div>
            <p>test &copy; 9ijakids 2022 </p>
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
              {" "}
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
