import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../components/Button/Button";

function Admin() {
  const [videos, setVideos] = useState([]);


  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [activeSection, setActiveSection] = useState("subir");

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(savedVideos);
  }, []);

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  const clearForm = () => {
    setTitle("");
    setArtist("");
    setVideoUrl("");
    setEditIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !artist || !videoUrl)
      return alert("Completa todos los campos");

    const newVideo = { title, artist, videoUrl };

    if (editIndex !== null) {
      const updatedVideos = [...videos];
      updatedVideos[editIndex] = newVideo;
      setVideos(updatedVideos);
      clearForm();
    } else {
      setVideos([...videos, newVideo]);
      clearForm();
    }
  };

  const handleEditSelect = (index) => {
    const video = videos[index];
    setTitle(video.title);
    setArtist(video.artist);
    setVideoUrl(video.videoUrl);
    setEditIndex(index);
    setActiveSection("editar");
  };

  const handleDelete = (index) => {
    if (window.confirm("¿Seguro que quieres eliminar este video?")) {
      const filteredVideos = videos.filter((_, i) => i !== index);
      setVideos(filteredVideos);
    }
  };

  const tabStyle = (section) => ({
    cursor: "pointer",
    backgroundColor: activeSection === section ? "#194B4C" : "transparent",
    color: activeSection === section ? "#F7F1E3" : "#F7F1E3",
    fontWeight: "600",
    border: "none",
    padding: "0.75rem 1.25rem",
    borderRadius: "8px",
    marginBottom: "0.5rem",
    textAlign: "center",
  });


  const inputStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "6px",
    padding: "0.5rem 0.75rem",
    border: "1px solid #ccc",
  };

  return (
    <div
      className="container my-5 p-4 rounded"
      style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#F7F1E3" }}
    >
      <h2 className="mb-4 text-center">Gestión de Videos</h2>

      <div className="row">

        <div className="col-12 col-md-3 mb-4 d-flex flex-column">
          {["subir", "editar", "eliminar"].map((section) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
                clearForm();
              }}
              style={tabStyle(section)}
              type="button"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>


        <div className="col-12 col-md-9">
          {activeSection === "subir" && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Título</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Artista</label>
                <input
                  type="text"
                  className="form-control"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">URL del Video</label>
                <input
                  type="text"
                  className="form-control"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/..."
                  style={inputStyle}
                />
              </div>
              <Button
                type="submit"
                className="btn btn-primary"
                text="Agregar Video"
              />
            </form>
          )}

          {activeSection === "editar" && (
            <>
              <p>Haz clic en el lápiz para editar un video:</p>
              {videos.length === 0 && <p>No hay videos para editar.</p>}

              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Artista</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {videos.map((video, i) => (
                    <tr key={i}>
                      <td>{video.title}</td>
                      <td>{video.artist}</td>
                      <td>
                        <i
                          className="bi bi-pencil-fill"
                          style={{
                            color: "white",
                            cursor: "pointer",
                            fontSize: "1.3rem",
                          }}
                          title="Editar"
                          onClick={() => handleEditSelect(i)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {editIndex !== null && (
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      value={artist}
                      onChange={(e) => setArtist(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">URL del Video</label>
                    <input
                      type="text"
                      className="form-control"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      placeholder="https://youtube.com/..."
                      style={inputStyle}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="btn btn-primary"
                    text="Actualizar Video"
                  />
                </form>
              )}
            </>
          )}

          {activeSection === "eliminar" && (
            <>
              <p>Haz clic en la basura para eliminar un video:</p>
              {videos.length === 0 && <p>No hay videos para eliminar.</p>}

              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Artista</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {videos.map((video, i) => (
                    <tr key={i}>
                      <td>{video.title}</td>
                      <td>{video.artist}</td>
                      <td>
                        <i
                          className="bi bi-trash-fill"
                          style={{
                            color: "white",
                            cursor: "pointer",
                            fontSize: "1.3rem",
                          }}
                          title="Eliminar"
                          onClick={() => handleDelete(i)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
