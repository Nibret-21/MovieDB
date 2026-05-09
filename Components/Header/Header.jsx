
import { useState, useEffect } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.isScrolled : ""}`}
    >
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo" />

        <nav className={styles.nav}>
          <Link className={styles.navlink} to="/">
            Home
          </Link>
          <Link className={styles.navlink} to="/tv">
            TV Shows
          </Link>
          <Link className={styles.navlink} to="/movies">
            Movies
          </Link>
          <Link className={styles.navlink} to="/news">
            News & Popular
          </Link>
          <Link className={styles.navlink} to="/language">
            Browse by Language
          </Link>
        </nav>

        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="Movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* notification */}
          <button className={styles.iconButton}>
            <Bell size={20} />
            <span className={styles.notification}>4</span>
          </button>

          {/* profile */}
          <div className={styles.profile}>
            <button
              onClick={() => setProfile(!profile)}
              className={styles.profileButton}
            >
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />
            </button>

            {profile && (
              <div className={styles.profileMenu}>
                <Link to="/account" className={styles.profileMenuItem}>
                  Account
                </Link>
                <Link to="/help" className={styles.profileMenuItem}>
                  Help Center
                </Link>
                <hr className={styles.profileDivider} />
                <button className={styles.profileMenuItem}>Sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;