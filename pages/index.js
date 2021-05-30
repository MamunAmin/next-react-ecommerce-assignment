import { Products } from '../components';
import styles from '../styles/Home.module.css';
import { server} from '../config';

export default function Home({ products }) {
  return (
    <div className={styles.container}>     
      <Products Products={products} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/products`)
  const Products = await res.json()

  return {
    props: {
      products: Products
    }
  }
}
