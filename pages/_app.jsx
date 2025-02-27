import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>[imL] Cargos</title>
        <link rel="icon" href="https://i.imgur.com/Cg8p6uN.png"/>
        
        <meta name="description" content="Venda de cargos dentro da RCC no Habbo Hotel. Confira os visuais permitidos e faça sua compra!" />
        <meta name="keywords" content="Habbo, RCC, Cargos" />
        <meta name="author" content="ImLegen" />
        <meta name="robots" content="index, follow" />
      
        <meta property="og:site_name" content="CARGOS COM OS MELHORES DESCONTOS" />
        <meta property="og:title" content="CARGOS COM OS MELHORES DESCONTOS" />
        <meta property="og:description" content="Compre cargos dentro da RCC no Habbo Hotel. Confira os visuais permitidos e faça sua compra!" />
        <meta property="og:image" itemprop="image" content="https://i.imgur.com/PSzst4F.png" />
        <meta property="og:image:secure_url" content="https://i.imgur.com/PSzst4F.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:url" content="https://imlegen.shop" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1700000000" />
      
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ImLegen - Cargos da RCC" />
        <meta name="twitter:description" content="Venda de cargos dentro da RCC no Habbo Hotel. Confira os visuais permitidos e faça sua compra!" />
        <meta name="twitter:image" content="https://www.imlegen.shop/images/legen.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
