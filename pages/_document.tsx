import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <link rel='preload' href='/fonts/Inter.var.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        <link rel='preload' href='/fonts/RobotoMono.var.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className='bg-primary text-base text-primary antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
