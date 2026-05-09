// import React from "react";
// import styles from "./SliderShow.module.css";
// import MovieCard from "../MovieCard/MovieCard";
// import {Swiper,swiperSlider} from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// // import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function SliderShow({ title, movies }) {
//   return (
//     <div className={styles.sliderWrapper}>
//       {/* title */}
//       <h2 className={styles.title}>{title}</h2>

//       {/* movie list */}
//       <div className={styles.Row}>
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           spaceBetween={10}
//           slidesPerView={5.8}
//         >
//           {movies?.map((movie) => (
//             <swiperSlider key={movie.id}>
//               <MovieCard movie={movie} />
//             </swiperSlider>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export default SliderShow;
import React from "react";
import styles from "./SliderShow.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function SliderShow({ title, movies }) {
  return (
    <div className={styles.sliderWrapper}>
      {/* title */}
      <h2 className={styles.title}>{title}</h2>

      {/* movie list */}
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5.5}
        >
          {movies?.length > 0 &&
            movies?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderShow;
// {
//   movies?.length > 0 &&
//     movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
// }