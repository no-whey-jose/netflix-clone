import Head from 'next/head';
import NavBar from '../components/navbar/navbar';
import Banner from '../components/banner/banner';
import styles from '../styles/Home.module.css';
import CategoryList from '../components/categoryList/categoryList';
import { getVideos } from '../lib/videos';

export default function Home() {
  const videos = getVideos();
  
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
      <div className={styles.sectionWrapper}>
        <CategoryList title="Category Title" videos={videos} />
      </div>
    </div>
  );
}
