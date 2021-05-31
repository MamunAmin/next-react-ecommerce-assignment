import { Products } from '../components';
import styles from '../styles/Home.module.css';
import { server, dev} from '../config';

export default function Home({ products }) {
  return (
    <div className={styles.container}>     
      <Products Products={products} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  if(!dev) {
    let fs = require('fs');
    let data = fs.readFileSync("../data/products.json", 'utf8');
    var Products = JSON.parse(data)
  }
  else {
    const res = await fetch(`${server}/api/products`)
    var Products = await res.json()
  }

  return {
    props: {
      products: Products
    }
  }
}
