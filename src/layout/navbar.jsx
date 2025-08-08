import { Link } from "react-router";
import Envelope from "../icons/envelope";
import Phone from "../icons/phone";
import Include from "../icons/include";
import Heart from "../icons/heart";
import AzeFlag from "../icons/AzeFlag";
import DownArrow from "../icons/downArrow";
import kinaciLogo from "../assets/kinaciLogo.png";
import FaceBook from "../icons/faceBook";
import Instagram from "../icons/instagram";
import Twitter from "../icons/twitter";
import Linkedin from "../icons/linkedin";
import Youtube from "../icons/youtube";
import { useState } from "react";
import Upchewron from "../icons/upchewron";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("/");
  const [isEmlakOpen, setIsEmlakOpen] = useState(false);
  const linkClass = (path) =>
    `cursor-pointer h-full flex items-center hover:text-orange-500 ${
      activeMenu === path
        ? "text-orange-500 border-b-2 border-orange-500"
        : "text-[#052841]"
    }`;
  return (
    <header>
      <div className="navTop bg-blue-50 flex justify-between px-44 py-2.5">
        <div className="headerLeft flex gap-[10px]">
          <button className="bg-[#2582C1] text-white  rounded-[5px] p-[6px_8px]">
            <Link className="flex justify-center items-center  gap-[5px] text-[14px] font-semibold leading-[14px]">
              <Envelope /> info@kinacigroup.com
            </Link>
          </button>
          <button className="bg-[#ED6B2C] text-white rounded-[5px] p-[6px_8px]">
            <Link className="flex justify-center items-center gap-[5px] text-[14px] font-semibold leading-[14px]">
              <Phone /> +90(544) 138 07 07
            </Link>
          </button>
          <button className="bg-white text-[#ED6B2C] border border-[#ED6B2C] rounded-[5px] p-[6px_8px]">
            <Link className="flex justify-center items-center gap-[5px] text-[14px] font-semibold leading-[14px]">
              <Include /> Daxil ol
            </Link>
          </button>
        </div>
        <div className="headerRight flex gap-[10px]">
          <button className="p-[6px_8px] rounded-[5px] bg-[#E21743]">
            <Link className="text-white flex gap-[6px] justify-center items-center  text-[14px] font-semibold leading-[14px]">
              Favoritlərim <Heart />
            </Link>
          </button>
          <button className="bg-[#FFFFFF] p-[6px_8px] rounded-[5px]">
            <Link className="flex justify-center gap-[4px] items-center text-[14px] font-semibold leading-[14px]">
              <DownArrow /> <AzeFlag /> Aze
            </Link>
          </button>
        </div>
      </div>
      <nav className="h-[95px] flex items-center justify-between px-44  shadow-[0_10px_10px_0_rgba(0,0,0,0.03)]">
        <div className="navRight flex items-center justify-center gap-[40px] h-full">
          <Link to="/"> 
            <img
              className="w-[167px] h-[65px]"
              src={kinaciLogo}
              alt="kinaciLogo"
            />
          </Link>
          <ul className="flex gap-[20px] h-full text-[14px] font-semibold leading-[14px]">
            <li className="h-full relative">
              <Link
                to="/"
                className={linkClass("/")}
                onClick={() => setActiveMenu("/")}
              >
                Ana Səhifə
              </Link>
            </li>

            <li>
              <Link
                to="/possessions"
                className={`${linkClass("/possessions")} gap-[4px]`}
                onClick={() => {
                  setActiveMenu("/possessions");
                  setIsEmlakOpen(!isEmlakOpen);
                }}
              >
                Əmlak  {isEmlakOpen ? (
               <Upchewron />
            ) : (
              <DownArrow/>
            )}
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={linkClass("/about")}
                onClick={() => setActiveMenu("/about")}
              >
                Şirkət haqqında
              </Link>
            </li>

            <li>
              <Link
                to="/service"
                className={`${linkClass("/service")} gap-[4px]`}
                 onClick={() => {
                  setActiveMenu("/service");
                  setIsEmlakOpen(!isEmlakOpen);
                }}
              >
                Xidmətlərimiz {isEmlakOpen ? (
               <Upchewron />
            ) : (
              <DownArrow/>
            )}
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={linkClass("/contact")}
                onClick={() => setActiveMenu("/contact")}
              >
                Əlaqə
              </Link>
            </li>

            <li>
              <Link
                to="/comments"
                className={linkClass("/comments")}
                onClick={() => setActiveMenu("/comments")}
              >
                Şərhlər
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className={linkClass("/blog")}
                onClick={() => setActiveMenu("/blog")}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="navLeft flex gap-[25px]">
          <Link>
            <p>
              <FaceBook />
            </p>
          </Link>
          <Link>
            <p>
              <Instagram />
            </p>
          </Link>
          <Link>
            <p>
              <Twitter />
            </p>
          </Link>
          <Link>
            <p>
              <Linkedin />
            </p>
          </Link>
          <Link>
            <p>
              <Youtube />
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
