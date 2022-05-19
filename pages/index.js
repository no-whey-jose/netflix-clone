import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/navbar/navbar';
import Banner from '../components/banner/banner';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar username="Jose Rubio" />
      <Banner
        title="Empire Records"
        subtitle="Damn the man, save the empire!"
        imgUrl="/static/empire-records.jpg"
      />
    </div>
  );
}
