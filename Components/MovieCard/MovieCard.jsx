// import React from "react";
// import { FaCirclePlay } from "react-icons/fa6";
// import { BsPlusCircle } from "react-icons/bs";
// import { GoCheckCircleFill } from "react-icons/go";
// import { IoIosArrowDropdownCircle } from "react-icons/io";
// import styles from "./MovieCard.module.css";

// function MovieCard({ movie }) {
//   const genres = ["Adventure", "Action", "Thriller"];

//   return (
//     <div className={styles.cardWrapper}>
//       {/* poster image */}
//       <img
//         className={styles.poster}
//         src={movie?.poster_path}
//         alt={movie?.title || "movie"}
//       />

//       {/* hover card */}
//       <div className={styles.hoverCard}>
//         <img
//           className={styles.hoverImage}
//           src={movie?.poster_path}
//           alt={movie?.title || "movie"}
//         />

//         {/* badge */}
//         <div className={styles.badge}>Recently Added</div>

//         {/* buttons */}
//         <div className={styles.buttonRow}>
//           <FaCirclePlay
//             className={styles.circleButton}
//             color="white"
//             size={40}
//           />
//           <BsPlusCircle
//             className={styles.circleButton}
//             color="white"
//             size={40}
//           />
//           <GoCheckCircleFill
//             className={styles.circleButton}
//             color="white"
//             size={40}
//           />
//           <IoIosArrowDropdownCircle
//             className={styles.circleButtonSmall}
//             color="white"
//             size={40}
//           />
//         </div>

//         {/* meta */}
//         <div className={styles.metaRow}>
//           <span className={styles.tag}>U/A 16+</span>
//           <span className={styles.tag}>Movie</span>
//           <span className={styles.tag}>HD</span>
//         </div>

//         {/* genres */}
//         <div className={styles.geners}>
//           {genres.map((g, index) => (
//             <span key={index}>
//               {g}
//               {index < genres.length - 1 && (
//                 <span className={styles.dot}> • </span>
//               )}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;










import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const genres = ["Adventure", "Action", "Thriller"];

  const imageUrl = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={imageUrl}
        alt={movie?.title || "movie"}
      />

      {/* hover card */}
      <div className={styles.hoverCard}>
        <img
          className={styles.hoverImage}
          src={imageUrl}
          alt={movie?.title || "movie"}
        />

        {/* badge */}
        <div className={styles.badge}>Recently Added</div>

        {/* buttons */}
        <div className={styles.buttonRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* meta */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* genres */}
        <div className={styles.genres}>
          {genres.map((g, index) => (
            <span key={index}>
              {g}
              {index < genres.length - 1 && (
                <span className={styles.dot}> • </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;













// import React, { useState } from "react";
// import { FaPlay } from "react-icons/fa";
// import { BsPlus } from "react-icons/bs";
// import { GoCheck } from "react-icons/go";
// import { IoIosArrowDown } from "react-icons/io";
// import styles from "./MovieCard.module.css";
// import { movies } from './../../Data/Data';
// const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
// function MovieCard({ movie }) {

//   const [hovered, setHovered] = useState(false);

//   const genres = ["Action", "Adventure", "Thriller"];

//   return (
//     <div
//       className={styles.card}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Poster */}
//       <img
//         className={styles.poster}
//         src={movie?.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : ""}
//         alt={movie?.title || "movie"}
//       />

//       <div className={`${styles.overlay} ${hovered ? styles.show : ""}`}>

//         <div className={styles.gradient}></div>

//         {/* Content */}
//         <div className={styles.content}>
//           {/* Title */}
//           <h3 className={styles.title}>{movie?.title || movie?.name}</h3>

//           {/* Buttons */}
//           <div className={styles.actions}>
//             <button className={styles.playBtn}>
//               <FaPlay />
//             </button>

//             <button className={styles.playBtn}>
//               <BsPlus />
//             </button>

//             <button className={styles.playBtn}>
//               <GoCheck />
//             </button>

//             <button className={styles.dropdownBtn} >
//               <IoIosArrowDown />
//             </button>

//           </div>

//           {/* Meta */}
//           <div className={styles.metaRow}>
//             <span className={styles.match}>98% Match</span>
//             <span className={styles.tag}>U/A 16+</span>
//             <span className={styles.tag}>HD</span>
//           </div>

//           {/* Genres */}
//           <div className={styles.genres}>
//             {genres.map((g, i) => (
//               <span key={i}>{g}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;




// import styles from "./MovieCard.module.css";
// import { FaCirclePlay } from "react-icons/fa6";
// import { BsPlusCircle } from "react-icons/bs";
// import { GoCheckCircleFill } from "react-icons/go";
// import { IoIosArrowDropdownCircle } from "react-icons/io";

// // TMDB image base
// const IMG_BASE = "https://image.tmdb.org/t/p/w500";
// const BACKDROP_BASE = "https://image.tmdb.org/t/p/original";

// function MovieCard({ movie }) {
//   const genres = ["Adventure", "Action", "Thriller"];

//   const poster = movie?.poster_path
//     ? IMG_BASE + movie.poster_path
//     : "/fallback.jpg";

//   const backdrop = movie?.backdrop_path
//     ? BACKDROP_BASE + movie.backdrop_path
//     : poster;

//   return (
//     <div className={styles.cardWrapper}>
//       {/* poster image */}
//       <img
//         className={styles.poster}
//         src={poster}
//         alt={movie?.title || "movie"}
//       />

//       {/* hover card */}
//       <div className={styles.hoverCard}>
//         {/* banner image (IMPORTANT FIX) */}
//         <img
//           className={styles.hoverImage}
//           src={backdrop}
//           alt={movie?.title || "movie"}
//         />

//         {/* badge */}
//         <div className={styles.badge}>Recently Added</div>

//         {/* buttons */}
//         <div className={styles.buttonRow}>
//           <FaCirclePlay className={styles.playButton} size={40} />
//           <BsPlusCircle className={styles.circleButton} size={32} />
//           <GoCheckCircleFill className={styles.circleButton} size={32} />
//           <IoIosArrowDropdownCircle
//             className={styles.circleButtonSmall}
//             size={32}
//           />
//         </div>

//         {/* meta */}
//         <div className={styles.metaRow}>
//           <span className={styles.tag}>U/A 16+</span>
//           <span className={styles.tag}>Movie</span>
//           <span className={styles.tag}>HD</span>
//         </div>

//         {/* genres (FIXED TYPO: geners → genres) */}
//         <div className={styles.genres}>
//           {genres.map((g, index) => (
//             <span key={index}>
//               {g}
//               {index < genres.length - 1 && (
//                 <span className={styles.dot}> • </span>
//               )}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;