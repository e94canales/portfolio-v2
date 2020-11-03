import Head from 'next/head';

// COMPONENTS
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Erick Canales - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />

    </Layout>
  )
}
