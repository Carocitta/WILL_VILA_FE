import React from "react";
import "./VideoCard.css";

function VideoCard({ title, artist, videoUrl, large = false }) {
  return (
    <div className={`video-card ${large ? "video-card-large" : ""}`}>
      <div className="video-wrapper">
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h5>{title}</h5>
      <p>{artist}</p>
    </div>
  );
}

export default VideoCard;
