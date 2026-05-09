import React from "react";
import bannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from './Banner.module.css'
import { movieInstance } from "../../Utility/movieInstance";
import requestUrl from "../../Utility/requesturls";
import { useEffect, useState } from "react";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";
function Banner() {
const [banner, setBanner] = useState(null);

useEffect(() => {
  async function fetchBannerImage() {
    try {
      const request = await movieInstance.get(requestUrl.netflixOriginals);

      const results = request?.data?.results || [];

      if (results.length === 0) return;

      const randomIndex = Math.floor(Math.random() * results.length);

      setBanner(results[randomIndex]);
    } catch (error) {
      console.error("Banner fetch error:", error);
    }
  }

  fetchBannerImage();
}, []);

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


  return (
    <div className={styles.banner}
      style={{
        backgroundImage: `url(${BANNER_BASE}${banner?.backdrop_path})`,
        backgroundSize: "cover",
      }}>
      <div className={styles.contents}>
        {/* image */}
        <img className={styles.logoImg} src={bannerLogo} alt="banner" />

        {/* title */}
        <h1 className={styles.title}>
          {banner?.title || banner?.name || banner?.original_name}
        </h1>

        {/* description */}
        <h1 className={styles.description}>
          {truncate(banner?.overview, 150)}
        </h1>

        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className= {styles.button}>
            <Play size={20} />
            Play
          </button>

          <button className={styles.button}>
            <Info size={20} />
            My List
          </button>
        </div>

        {/* fading */}
        <div className={styles.fadeButton}></div>
      </div>
    </div>
  );
}

export default Banner;
