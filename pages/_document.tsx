import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import config from '@/config/website';

export default class Document extends NextDocument {
  render() {
    const { siteMetadata } = config;
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            key="description"
            name="description"
            content={siteMetadata.description}
          />
          <meta key="title" name="title" content={siteMetadata.title} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
