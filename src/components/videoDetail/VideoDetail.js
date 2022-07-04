import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="h-100">
      <div
        className="embed-responsive embed-responsive-16by9 p-2 "
        style={{ height: "700px", maxHeight: "100%" }}
        allowfullscreen
      >
        <iframe
          title="video player"
          src={videoSrc}
          className="embed-responsive-item w-100 h-100"
          allowfullscreen
        ></iframe>
      </div>

      <div className="p-3 border m-2 ">
        <h4 className="border-bottom pb-3">{video.snippet.title}</h4>
        <p className="pt-3">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
