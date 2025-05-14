import "./VideoCard.css";

function VideoCard({ id, thumbnail, title, artist, videoUrl }) {
  return (
    <div className="card video-card" style={{ width: "22rem" }}>
      <div className="video-wrapper ratio ratio-16x9">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Artista: {artist}</p>
      </div>
    </div>
  );
}

export default VideoCard;
