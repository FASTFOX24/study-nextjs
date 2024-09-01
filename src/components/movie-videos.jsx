import { URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css"
const getvideos = async (id) => {
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
};

export default async function MovieVideos({ id }) {
  const videos = await getvideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
