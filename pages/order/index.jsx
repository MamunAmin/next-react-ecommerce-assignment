import { Order } from '../../components';
import { server } from '../config';


const order = ({ Orders }) => {
  return (
    <div>
      <Order Orders={Orders} />
    </div>
  )
}
export default order;

export async function getServerSideProps(context) {
  const res = await fetch(`${server}/api/orders`)
  const orders = await res.json()

  return {
    props: {
      Orders: orders
    }
  }
}