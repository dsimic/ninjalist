import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  return {
    props: { ninjas: data },
  };
};

export default function Ninjas({ ninjas }) {
  return (
    <>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link href={'/ninjas/' + ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>{" "}
          </a>
          </Link>
        </div>
      ))}
    </>
  );
}
