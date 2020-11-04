import Head from "next/head";
import styles from "../styles/home.module.scss";

// COMPONENTS
import Layout from "../components/Layout";
import { useState } from "react";

export default function Home() {

  const [ modalType, setModalType ] = useState(null);

  return (
    <Layout>
      <Head>
        <title>Erick Canales - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* BACKGROUND */}
      <div className={styles.background}>
        <img
          className={styles.backgroundImage}
          src="/images/buildings-min.png"
        />
        <img className={styles.overlayImage} src="/images/connections.png" />
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.mainContentContainer}>
        {modalType === null ? (
          <div />
        ) : (
          <Modal type={modalType} setModalType={setModalType} />
        )}
        <div className={styles.info}>
          <h3>Full Stack Web Developer</h3>
          <h4>javascript • react • css • html • java • python</h4>
          <div className={styles.verticalLine} />
          <div className={styles.bottomNav}>
            <div className={styles.item} onClick={() => setModalType("intro")}>
              <h5>intro</h5>
            </div>
            <div className={styles.item} onClick={() => setModalType("showcase")}>
              <h5>showcase</h5>
            </div>
            <a
              href='https://www.github.com/e94canales'
              target="_blank"
              className={styles.item}
            >
              <h5>github</h5>
            </a>
            <div className={styles.item}>
              <h5>contact</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
