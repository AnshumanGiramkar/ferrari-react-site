import { useNavigate } from 'react-router-dom';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRecoilValue } from 'recoil';
import { cartState } from '../../global-state/cartItems';

export const navElements = [
  { label: 'ENZO', route: '', style: { marginRight: 'auto' } },
  { label: 'Ferrari 296 GTB', route: 'ferrari_gtb' },
  { label: 'Ferrari 296 GTS', route: 'ferrari_gts' },
  { label: 'Ferrari SF90 Stradale', route: 'sf90_stradale' },
  { label: 'Ferrari SF90 Spider', route: 'sf90_spider' },
  { label: 'History', route: 'ferrari_history' },
  { label: 'Shop', route: 'shop' },
  { label: <ShoppingCartIcon />, route: 'cart', style: { marginLeft: 'auto' } },
  { label: 'Menu', route: null },
];

export default function Header({ setShowSidebar }) {
  const navigate = useNavigate();
  const cartItems = useRecoilValue(cartState);

  return (
    <>
      <nav>
        <ul className="headerList">
          {navElements.map(({ label, route, style = {} }) => {
            if (route === 'cart') {
              return (
                <li
                  onClick={() => {
                    navigate(`/${route}`);
                  }}
                  key={route}
                  style={style}
                >
                  <span className="cart-items-count">{cartItems.length}</span>
                  {label}
                </li>
              );
            }
            return (
              <li
                style={style}
                key={label}
                onClick={() => {
                  if (label === 'Menu') {
                    setShowSidebar(true);
                  } else if (label === 'History') {
                    navigate(`/${route}`);
                  } else {
                    navigate(`/${route}`);
                  }
                }}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
