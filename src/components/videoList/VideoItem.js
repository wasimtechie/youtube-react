import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="container pt-1 flex">
      <div
        className="row border rounded-2 shadow-sm"
        onClick={() => onVideoSelect(video)}
      >
        <div className="col-4-lg ">
          <img
            style={{ width: "100%" }}
            className="pt-3 rounded-3 align-items-center animated pulse infinite"
            src={video.snippet.thumbnails.medium.url}
            alt=""
            // width={"fit-content"}
          />
        </div>
        <div className="col-8-lg px-5 pt-2">
          <h6>{video.snippet.title}</h6>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
