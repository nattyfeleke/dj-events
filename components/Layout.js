import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from  '@/styles/Layout.module.css'
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';

export default function Layout({ title, keywords, description, children }) {

  const router = useRouter();
  return (
    <div>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <title>{title}</title>
      </Head>
<Header />
{router.pathname === '/' && <Showcase />}
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
