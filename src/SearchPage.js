import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import { ChannelRow } from "./ChannelRow";

export const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
        channel="ANaranjoDev"
        verified
        subs="660K"
        noOfVideos={382}
        description="Nice description"
      />
    </div>
  );
};
