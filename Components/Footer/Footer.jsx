// import React from 'react'
// import styles from './Footer.module.css'
// function Footer() {
//   return (
//     <div>
//       <div className={styles.footer}>
//         <div className={styles.container}>
//           {/* Social Icons */}
//           <div className={styles.socials}>
//             <i className="fab fa-facebook"></i>
//             <i className="fab fa-instagram"></i>
//             <i className="fab fa-twitter"></i>
//             <i className="fab fa-youtube"></i>
//           </div>

//           {/* Links */}
//           <div className={styles.links}>
//             <a href="#">Audio Description</a>
//             <a href="#">Help Centre</a>
//             <a href="#">Gift Cards</a>
//             <a href="#">Media Centre</a>

//             <a href="#">Investor Relations</a>
//             <a href="#">Jobs</a>
//             <a href="#">Terms of Use</a>
//             <a href="#">Privacy</a>

//             <a href="#">Legal Notices</a>
//             <a href="#">Cookie Preferences</a>
//             <a href="#">Corporate Information</a>
//             <a href="#">Contact Us</a>
//           </div>

//           {/* Copyright */}
//           <p className={styles.copy}>© 1997–2026 Netflix, Inc.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer
import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {/* Social Icons */}
        <div className={styles.socials}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>

        {/* Links */}
        <div className={styles.links}>
          <a href="#">Audio Description</a>
          <a href="#">Help Centre</a>
          <a href="#">Gift Cards</a>
          <a href="#">Media Centre</a>

          <a href="#">Investor Relations</a>
          <a href="#">Jobs</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>

          <a href="#">Legal Notices</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Corporate Information</a>
          <a href="#">Contact Us</a>
        </div>

        <p className={styles.copy}>© 1997–2026 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;