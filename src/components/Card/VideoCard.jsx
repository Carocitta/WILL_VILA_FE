import "./VideoCard.css";

function VideoCard({ id, title, artist, videoUrl }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card video-card h-100 rounded-4">
        <div className="video-wrapper ratio ratio-16x9 rounded overflow-hidden">
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
    </div>
  );
}

export default VideoCard;
