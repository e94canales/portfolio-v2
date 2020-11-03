import Head from 'next/head';
import styles from '../styles/home.module.scss';

// COMPONENTS
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Erick Canales - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.background}>
        <img className={styles.backgroundImage} src='/images/buildings-min.png' />
        <img className={styles.overlayImage} src='/images/connections.png' />
      </div>

    </Layout>
  )
}
