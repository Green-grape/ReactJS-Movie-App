import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, year, title, summary, genres }) {
  return (
    <div key={id} className={styles.movie}>
      <img className={styles.movie__img} src={coverImg} alt="coverImg" />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>
          {summary.length > 245 ? summary.substring(0, 235) + "..." : summary}
        </p>
        <ul className={styles.movie__genres}>
          {genres.map((g, index) => {
            return <li key={index}>{g}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
