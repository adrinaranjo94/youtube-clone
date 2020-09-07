import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenuSidebar } from "actions/ui";

export const Header = () => {
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon
          onClick={() => {
            dispatch(toggleMenuSidebar());
          }}
        />
        <Link
          to="/"
          onClick={() => {
            setInputSearch("");
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/YouTube_icon.png/800px-YouTube_icon.png"
            alt="logo youtube"
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`} className="header__linkButton">
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Adrian Naranjo"
          src="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
        />
      </div>
      {/* <div className="navbar__center__container">
        <input type="text" className="navbar__search__input" />
      </div>
      <div className="navbar__right__container">
        <p>Right side</p>
      </div> */}
    </div>
  );
};
