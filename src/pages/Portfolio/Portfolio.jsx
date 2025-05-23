import React, { useState } from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./Portfolio.css";
import Paginator from "../../components/Paginator/Paginator";

function Portfolio() {
  const videos = [
    {
      id: 1,
      title: "Karma Fest 2024 (Asturies)",
      artist: "Brothers Till We Die",
      videoUrl: "https://www.youtube.com/embed/X2XQQQ6pM1o?si=AKMC12WNIf642dWX",
    },
    {
      id: 2,
      title: "Barcelona - La Deskomunal 2023",
      artist: "La Tretze ",
      videoUrl: "https://www.youtube.com/embed/dFkFJta3vOY?si=vks7UP0w2ZFt1f41",
    },
    {
      id: 3,
      title: "(Official Aftermovie)",
      artist: "Le Reyerté I",
      videoUrl: "https://www.youtube.com/embed/f3DsFv372Sw?si=vo107qTrp04tD7nh",
    },
    {
      id: 4,
      title: "Sahrijai (Villabona)",
      artist: "Calathea",
      videoUrl: "https://www.youtube.com/embed/ghk63rdo8qw?si=sAIn1JB5At2o8WEz",
    },
    {
      id: 5,
      title: "La Nau (Barcelona)",
      artist: "We Exist Even Dead ",
      videoUrl: "https://www.youtube.com/embed/3qHRtwhuTF4?si=3YcnNjXCqu8iDW9h",
    },
    {
      id: 6,
      title: "Emostiu 2023 (Barcelona)",
      artist: "Øjne",
      videoUrl: "https://www.youtube.com/embed/zzLZbFOCcI4?si=mDqxiqyvaJEghb8x",
    },
    {
      id: 7,
      title: "Paral·lel 62 (Barcelona)",
      artist: "Vereda",
      videoUrl: "https://www.youtube.com/embed/pXdjQagKVf4?si=hyCbCO1p5pxDyOfQ",
    },
    {
      id: 8,
      title: "Iridescent live at Ultra-Local Records",
      artist: "Caricias",
      videoUrl: "https://www.youtube.com/embed/6dlkgi3Nmw8?si=vCp4wlMRG6d4dCEn",
    },
    {
      id: 9,
      title: "Copérnico (Madrid) 2024",
      artist: "Against The Waves live",
      videoUrl: "https://www.youtube.com/embed/kUGAZGQ9qDo?si=5jLLkneOzgoqquO4",
    },
    {
      id: 10,
      title: "La Nau (Barcelona)",
      artist: "Boneflower",
      videoUrl: "https://www.youtube.com/embed/RQSm_D5mOIM?si=VV9THjz8ONniINuu",
    },
    {
      id: 11,
      title: "Sagnant: Behind the OST",
      artist: "Böira",
      videoUrl: "https://www.youtube.com/embed/WaVJPi09TvI?si=JdAr0hfoqVeyFfwR",
    },
    {
      id: 12,
      title: "Nothing But Numbers live - Butirrock (Sarrià de Ter)",
      artist: "Weak",
      videoUrl: "https://www.youtube.com/embed/9PfOiSecAA0?si=_qaq2k-MXlI37uhK",
    },
    {
      id: 13,
      title: "Binaries live (Grindhouse Leeds)",
      artist: "Arms & Hearts",
      videoUrl: "https://www.youtube.com/embed/qK55bGt2Olw?si=vfYOq9F7bEbepcni",
    },
    {
      id: 14,
      title: "Aimless x Mankind Grief",
      artist: "Aimless x Mankind Grief",
      videoUrl: "https://www.youtube.com/embed/IqVIJUjdIXs?si=ROm_pfXuqnXvzsmX",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 7;

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className="container mt-4">
      <div className="row">
      
        {currentVideos[0] && (
          <div className="col-12 mb-4">
            <VideoCard {...currentVideos[0]} large />
          </div>
        )}
      </div>

     
      <div className="row">
        {currentVideos.slice(1).map((video) => (
          <div key={video.id} className="col-md-6 mb-4">
            <VideoCard {...video} />
          </div>
        ))}
      </div>

     
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
