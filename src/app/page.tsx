"use client";
import styles from "./page.module.css";
import Providers from "./providers";
import YourComponent from "./your-component";

export default function Home() {
  return (
    <div className={styles.page}>
      <Providers>
        <h1>Hello World</h1>
        <YourComponent />
      </Providers>
    </div>
  );
}
