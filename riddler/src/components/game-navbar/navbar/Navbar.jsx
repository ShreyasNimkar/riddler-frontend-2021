import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink,
  Player,
  MusicPlayer,
  MusicDropdown,
  NavMenuRight,
} from "./NavbarElements";
import { useSelector } from "react-redux";
import PlayLogo from "../../../assets/play.svg";
import GuideLogo from "../../../assets/guide.svg";
import LeaderboardLogo from "../../../assets/leaderboard.svg";
import star from "../../../assets/star.svg";
import { FaBars, FaStar, FaMusic, FaChevronDown } from "react-icons/fa";
import Tooltip from "@material-ui/core/Tooltip";
import { ReactComponent as Cross } from "../../../assets/cross.svg";

import riddlerLogo from "./assets/riddlerlogo_svg_black.svg";
// import { ReactComponent as RidderLogo } from "./assets/riddlerlogo_svg_black.svg";
import { NavLink, useLocation } from "react-router-dom";
import { getPlayerdata } from "../../../api/requests";
import LightTooltip from "../../game-pages/Tooltip";

const Navbar = ({ toggle, backgroundColor, wantHint }) => {
  const location = useLocation();
  const userName = useSelector((state) => state.auth.username);
  const token = useSelector((state) => state.auth.token);
  const [score, setScore] = useState("-");
  const [currentTrack, setCurrentTrack] = useState(
    JSON.parse(localStorage.getItem("currentTracks"))
      ? JSON.parse(localStorage.getItem("currentTracks"))
      : []
  );
  const [play, setPlay] = useState(false);
  const url = play
    ? "https://www.youtube.com/embed/qt_urUz42vI?rel=0&autoplay=1&loop=1&autopause=0"
    : "https://www.youtube.com/embed/qt_urUz42vI?rel=0&autoplay=0&loop=1&autopause=0";

  const updateColor = (res) => {
    // setCurrentTrack(JSON.parse(localStorage.getItem("currentTracks")));
    setCurrentTrack(res.currentTrack);
    if (currentTrack === [] || currentTrack === null) {
      document.documentElement.style.setProperty(
        "--leaderboard-bg",
        "--present"
      );
      document.documentElement.style.setProperty("--map-bg", "--past");
      document.documentElement.style.setProperty("--guide-bg", "--future");
    } else {
      const varNames = {
        1: "--present",
        2: "--past",
        3: "--future",
      };
      const currentColor = varNames[currentTrack[0]];
      document.documentElement.style.setProperty(
        "--leaderboard-bg",
        `var(${currentColor})`
      );
      document.documentElement.style.setProperty(
        "--map-bg",
        `var(${currentColor})`
      );
      document.documentElement.style.setProperty(
        "--guide-bg",
        `var(${currentColor})`
      );
    }
  };
  

  useEffect(() => {
    const asyncPlayerdata = async () => {
      let res = await getPlayerdata(token);
      console.log(res);
      updateColor(res);
      setScore(res.playerScore);
    };
    asyncPlayerdata();
  }, [wantHint]);
  console.log("Rerendering")

  return (
    <>
      <Nav backgroundColor={backgroundColor}>
        <NavbarContainer>
          <NavLogo to="game">
            <img src={riddlerLogo} alt="Riddler Logo"></img>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <LightTooltip title="Guide">
              <NavLinks to="guide">
                <img src={GuideLogo} alt="Guide Logo"></img>
              </NavLinks>
            </LightTooltip>
            <LightTooltip title="Game">
              <NavLinks to="play">
                <img src={PlayLogo} alt="Play Logo"></img>
              </NavLinks>
            </LightTooltip>
            <LightTooltip title="Leaderboard">
              <NavLinks to="leaderboard">
                <img src={LeaderboardLogo} alt="Leaderboard Logo"></img>
              </NavLinks>
            </LightTooltip>
          </NavMenu>
          <NavMenuRight>
            <Player backgroundColor={backgroundColor}>
              <FaStar />
              <p>{score}</p>
            </Player>
            <Player backgroundColor={backgroundColor}>{userName}</Player>
            <MusicPlayer
              backgroundColor={backgroundColor}
              onClick={() => {
                setPlay(!play);
              }}
            >
              <FaMusic />
              {!play && <Cross id="music-cross" />}
              <iframe
                title="music"
                width="560"
                height="315"
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </MusicPlayer>
            {/* <MusicDropdown backgroundColor={backgroundColor}>
              <FaChevronDown />
            </MusicDropdown> */}
          </NavMenuRight>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
