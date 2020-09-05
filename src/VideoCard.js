import React from "react";
import { Avatar } from "@material-ui/core";

export const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
      </div>
      <div className="videoCard__text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views} • {timestamp}
        </p>
      </div>
    </div>
  );
};
