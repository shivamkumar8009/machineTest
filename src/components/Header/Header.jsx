import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.left}>Movie DB</div>
        <div className={styles.right}>
          <div className={styles.r1}>Popular</div>
          <div className={styles.r2}>Top Rated</div>
          <div className={styles.r3}>Upcoming</div>
          <div className={styles.r4}>Movie Name</div>
          <div className={styles.r5}>Search</div>
        </div>
      </section>
    </>
  );
}

export default Header;
