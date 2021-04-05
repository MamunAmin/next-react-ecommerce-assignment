import Head from 'next/head';
import { Navbar } from '../components';
import CartContext from '../provider/cartProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CartContext>
      <Head>
        <title>Livestock Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="E-commerce, Online Meat Shop,Livestock Shop" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </CartContext>
  )
}
export default MyApp;
