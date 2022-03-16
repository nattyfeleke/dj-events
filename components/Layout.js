import Head from 'next/head';
import styles from  '../styles/Layout.module.css'
import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <title>{title}</title>
      </Head>
<Header />
      <div className={styles.container}>

      {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ encents | Find the hottest parties',
  description: 'this is the default desctiption',
  keywords: 'music, dj, edm, events',
};
