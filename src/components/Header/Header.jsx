import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.left}>
          <Link className={styles.l1} to="/">
            Movie DB
          </Link>
        </div>
        <div className={styles.right}>
          <div>
            <Link className={styles.r1} to="/">
              Popular
            </Link>
          </div>
          <div>
            <Link className={styles.r2} to="/topRated">
              Top Rated
            </Link>
          </div>
          <div>
            <Link className={styles.r3} to="/upcoming">
              Upcoming
            </Link>
          </div>
          <div>
            <Link className={styles.r4} to="/">
              Movie Name
            </Link>
          </div>
          <div>
            <Link className={styles.r5} to="/">
              Search
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
