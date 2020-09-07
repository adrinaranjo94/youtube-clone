import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarRow } from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const { menuSidebarCollapse } = useSelector((state) => state.ui);

  return (
    <div
      className={`sidebar ${menuSidebarCollapse ? "sidebar__collapse" : ""}`}
    >
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your videos" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
};
