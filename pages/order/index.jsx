import { Order } from '../../components';

const order = ({ Orders }) => {
  return (
    <div>
      <Order Orders={Orders} />
    </div>
  )
}
export default order;

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/orders`)
  const orders = await res.json()

  return {
    props: {
      Orders: orders
    }
  }
}