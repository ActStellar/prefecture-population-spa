import Image from "next/image";
import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome!</h1>
      </main>
    </div>
  );
}
