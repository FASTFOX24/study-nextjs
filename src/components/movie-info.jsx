import { URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export const getMovie = async (id) => {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_black"}>HomePage &rarr;</a>
      </div>
    </div>
  );
}
