import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Errata</title>
        <meta name="description" content="Decentralized Audit Organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>Errata</div>
        <div className={styles.mainSection}>
          <div className={styles.left}>
            <div className={styles.title}>
              <div>Decentralized</div>
              <div>Audit</div>
              <div className={styles.lastWord}>Organization</div>
            </div>
            <div className={styles.description}>
              A platform where token sales and audits are conducted
              simultaneously within a transparent investment environment.
            </div>
            <div className={styles.buttons}>
              <Link href="/host">
                <a className={styles.hostButton}>Host Errata</a>
              </Link>
              <Link href="/invest">
                <a className={styles.investButton}>Invest</a>
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.ongoing}>Ongoing Errata</div>
            <div className={styles.projects}>
              <div className={styles.project}>
                <div className={styles.projectName}>Project 1</div>
                <div className={styles.epoch}>Epoch 3</div>
              </div>
              <div className={styles.project}>
                <div className={styles.projectName}>Project 1</div>
                <div className={styles.epoch}>Epoch 3</div>
              </div>
              <div className={styles.project}>
                <div className={styles.projectName}>Project 1</div>
                <div className={styles.epoch}>Epoch 3</div>
              </div>
              <div className={styles.project}>
                <div className={styles.projectName}>Project 1</div>
                <div className={styles.epoch}>Epoch 3</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
