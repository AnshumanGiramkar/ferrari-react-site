import React from 'react';
import Product from '../product/Product';
import './Products.css';
import ferrariGTB from '../../assets/ferrari_296_gtb.jpg';
import ferrariGTS from '../../assets/ferrari-296-gts.jpg';
import sf90Stradale from '../../assets/ferrari_sf90_stradale.jpg';
import sf90Spider from '../../assets/ferrari_sf90_spider.jpg';
import alfootrest from '../../assets/alfootrests.jpeg';
import cfibre from '../../assets/cfibrecentre.jpeg';

const products = [
  {
    id: 1,
    image: ferrariGTB,
    title: 'Ferrari 296 GTB',
    description: 'Plug-in hybrid mid-engined sports car.',
    price: 338255.0,
  },
  {
    id: 2,
    image: ferrariGTS,
    title: 'Ferrari 296 GTS',
    description: 'Retractable hardtop version of the 296GTB.',
    price: 371139.0,
  },
  {
    id: 3,
    image: sf90Stradale,
    title: 'SF90 Stradale',
    description: 'Plug-in hybrid supercar.',
    price: 507045.0,
  },
  {
    id: 4,
    image: sf90Spider,
    title: 'SF90 Spider',
    description: 'Retractable hardtop version of the SF90 Stradale.',
    price: 562928.0,
  },
  {
    id: 5,
    image: alfootrest,
    title: 'Aluminium Footrests',
    description:
      'Enhance the interior of your Ferrari with sleek aluminium footrests.',
    price: 2500.0,
  },
  {
    id: 6,
    image: cfibre,
    title: 'Carbon Fibre Console',
    description:
      "Upgrade your Ferrari's interior with a luxurious carbon fibre console",
    price: 10000.0,
  },
];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
