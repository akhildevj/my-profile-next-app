import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='dark'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='description' content='Akhildev MJ - My profile web app' />
        <meta
          name='keywords'
          content='Next.js, React.js, Tailwind, HTML, CSS, JavaScript'
        />
        <meta name='author' content='Akhildev MJ' />

        <link rel='apple-touch-icon' href='/favicon.ico'></link>

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Quicksand:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-fixed bg-gradient-to-r from-cyan-400 to-sky-600 dark:from-zinc-900 dark:to-zinc-800 font-Quicksand'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
