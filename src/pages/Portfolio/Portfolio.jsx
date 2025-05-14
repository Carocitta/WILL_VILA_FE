import React from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./Portfolio.css";
import Paginator from "../../components/Paginator/Paginator";

function PortfolioPage() {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      artist: "Artist 1",
      videoUrl: "https://www.youtube.com/embed/video_id",
    },
    {
      id: 2,
      title: "Video 2",
      artist: "Artist 2",
      videoUrl: "https://www.youtube.com/embed/video_id",
    },
    {
      id: 3,
      title: "Video 3",
      artist: "Artist 3",
      videoUrl: "https://www.youtube.com/embed/video_id",
    },
    {
      id: 4,
      title: "Video 4",
      artist: "Artist 4",
      videoUrl: "https://www.youtube.com/embed/video_id",
    },
    {
      id: 5,
      title: "Video 5",
      artist: "Artist 5",
      videoUrl: "https://www.youtube.com/embed/video_id",
    },
    {
      id: 6,
      title: "Video 6",
      artist: "Artist 6",
      videoUrl: "https://www.youtube.com/embed/video_id",
    },
    {
      id: 7,
      title: "Video 7",
      artist: "Artist 7",
      videoUrl: "https://www.youtube.com/embed/video_id",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 mb-4">
          <VideoCard {...videos[0]} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <VideoCard {...videos[1]} />
        </div>
        <div className="col-md-6 mb-4">
          <VideoCard {...videos[2]} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <VideoCard {...videos[3]} />
        </div>
        <div className="col-md-6 mb-4">
          <VideoCard {...videos[4]} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <VideoCard {...videos[5]} />
        </div>
        <div className="col-md-6 mb-4">
          <VideoCard {...videos[6]} />
        </div>
        <div>
          <Paginator />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
