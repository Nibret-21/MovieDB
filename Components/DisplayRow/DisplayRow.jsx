// import {useState,useEffect} from "react";
// import styles from "./DisplayRow.module.css";
// import SliderShow from "../SliderShow/SliderShow";
// import { movies } from "../../Data/Data";
// import{movieInstance}from '../../Utility/movieInstance'
// import requestUrl from '../../Utility/requesturls'
// function DisplayRow() {
// const [movies,setMovies]=useState({
// trending:[],
// netflixOriginals:[],
// topRated:[],
// action:[],
// comedy:[],
// horror:[],
// romance:[],
// documentaries:[],
// })
// useEffect(()=>{fetchMovies();
// },[])
// const fetchMovies = async () => {
//   try {
//     const [
//       trendingResponse,
//       netflixOriginalsResponse,
//       topRatedResponse,
//       actionResponse,
//       comedyResponse,
//       horrorResponse,
//       romanceResponse,
//       documentariesResponse,
//     ] = await Promise.all([
//       movieInstance.get(requestUrl.trending),
//       movieInstance.get(requestUrl.netflixOriginals),
//       movieInstance.get(requestUrl.topRated),
//       movieInstance.get(requestUrl.action),
//       movieInstance.get(requestUrl.comedy),
//       movieInstance.get(requestUrl.horror),
//       movieInstance.get(requestUrl.romance),
//       movieInstance.get(requestUrl.documentaries),
//     ]);

//     // ✅ FIX: use .data instead of .json()

//     setMovies({
//       trending: trendingResponse.data.results,
//       netflixOriginals: netflixOriginalsResponse.data.results,
//       topRated: topRatedResponse.data.results,
//       action: actionResponse.data.results,
//       comedy: comedyResponse.data.results,
//       horror: horrorResponse.data.results,
//       romance: romanceResponse.data.results,
//       documentaries: documentariesResponse.data.results,
//     });
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// };

// return (
//   <div className={styles.mainWrapper}>
//       <SliderShow title="Trending" movies={movies.trending} />
//       <SliderShow title="Popular on netflix" movies={movies.netflixOriginals} />
//       <SliderShow title="Top Rated" movies={movies.topRated} />
//       <SliderShow title="Action" movies={movies.action} />
//       <SliderShow title="Comedy" movies={movies.comedy} />
//       <SliderShow title="Horror" movies={movies.horror} />
//       <SliderShow title="Romance" movies={movies.romance} />
//       <SliderShow title="Documentaries" movies={movies.documentaries} />
//     </div>
//   );
// }

// export default DisplayRow;
import { useState, useEffect } from "react";
import styles from "./DisplayRow.module.css";
import SliderShow from "../SliderShow/SliderShow";
import { movieInstance } from "../../Utility/movieInstance";
import requestUrl from "../../Utility/requesturls";

function DisplayRow() {

  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  // const fetchMovies = async () => {
  //   try {
  //     const responses = await Promise.allSettled([
  //       movieInstance.get(requestUrl.trending),
  //       movieInstance.get(requestUrl.netflixOriginals),
  //       movieInstance.get(requestUrl.topRated),
  //       movieInstance.get(requestUrl.action),
  //       movieInstance.get(requestUrl.comedy),
  //       movieInstance.get(requestUrl.horror),
  //       movieInstance.get(requestUrl.romance),
  //       movieInstance.get(requestUrl.documentaries),
  //     ]);

  //     // ✅ Safe extractor
  //     const getData = (res) =>
  //       res.status === "fulfilled" ? (res.value?.data?.results ?? []) : [];

  //     setMovies({
  //       trending: getData(responses[0]),
  //       netflixOriginals: getData(responses[1]),
  //       topRated: getData(responses[2]),
  //       action: getData(responses[3]),
  //       comedy: getData(responses[4]),
  //       horror: getData(responses[5]),
  //       romance: getData(responses[6]),
  //       documentaries: getData(responses[7]),
  //     });
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // ✅ Prevent crash during loading
  // if (loading) {
  //   return <h2 className={styles.loading}>Loading movies...</h2>;
  // }
const fetchMovies = async () => {
  try {
    const responses = await Promise.allSettled([
      movieInstance.get(requestUrl.trending),
      movieInstance.get(requestUrl.netflixOriginals),
      movieInstance.get(requestUrl.topRated),
      movieInstance.get(requestUrl.action),
      movieInstance.get(requestUrl.comedy),
      movieInstance.get(requestUrl.horror),
      movieInstance.get(requestUrl.romance),
      movieInstance.get(requestUrl.documentaries),
    ]);

    console.log("API RESPONSES:", responses);

    const safeData = (res) =>
      res.status === "fulfilled" && res.value?.data?.results
        ? res.value.data.results
        : [];

    setMovies({
      trending: safeData(responses[0]),
      netflixOriginals: safeData(responses[1]),
      topRated: safeData(responses[2]),
      action: safeData(responses[3]),
      comedy: safeData(responses[4]),
      horror: safeData(responses[5]),
      romance: safeData(responses[6]),
      documentaries: safeData(responses[7]),
    });
  } catch (error) {
    console.error("DISPLAY ROW ERROR:", error);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className={styles.mainWrapper}>
      {movies.trending.length > 0 && (
        <SliderShow title="Trending" movies={movies.trending} />
      )}

      {movies.netflixOriginals.length > 0 && (
        <SliderShow
          title="Popular on Netflix"
          movies={movies.netflixOriginals}
        />
      )}

      {movies.topRated.length > 0 && (
        <SliderShow title="Top Rated" movies={movies.topRated} />
      )}

      {movies.action.length > 0 && (
        <SliderShow title="Action" movies={movies.action} />
      )}

      {movies.comedy.length > 0 && (
        <SliderShow title="Comedy" movies={movies.comedy} />
      )}

      {movies.horror.length > 0 && (
        <SliderShow title="Horror" movies={movies.horror} />
      )}

      {movies.romance.length > 0 && (
        <SliderShow title="Romance" movies={movies.romance} />
      )}

      {movies.documentaries.length > 0 && (
        <SliderShow title="Documentaries" movies={movies.documentaries} />
      )}
    </div>
  );
}

export default DisplayRow;