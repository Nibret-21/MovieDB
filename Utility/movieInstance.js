// import axios from "axios";
// const movieInstance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
// });
// export { movieInstance };
import axios from "axios";
export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});