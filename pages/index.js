import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Content random lorem ipsuem</p>
        <p className={styles.text}>Content random lorem ipsuem</p>
        <p className={styles.text}>Content random lorem ipsuem</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See all ninjas.</a>
        </Link>
      </div>
    </>
  );
}
