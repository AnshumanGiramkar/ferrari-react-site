import Products from '../components/products/Products';

const myStyle = {
  margin: '15px 25px',
  padding: '10px 10px',
  fontSize: '25px',
};

export default function ShopPage() {
  return (
    <div className="shop-page">
      <h1 style={myStyle}>Products</h1>
      <Products />
    </div>
  );
}
