import { useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Head from 'next/head';
import { useTheme } from '@/utils/themeContext';

export default function Layout({ children, title }) {
  const { theme } = useTheme();

  useEffect(() => {
    theme === 'theme-dark'
      ? (document.body.style.backgroundColor = '#15202b')
      : (document.body.style.backgroundColor = '#ffffff');
  }, [theme]);

  return (
    <>
      <Head>
        <title>{title || 'portfolio'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`${theme} bg-background content-transition`}>
        <div className="wrap px-2">
          <header>
            <Header />
          </header>
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
