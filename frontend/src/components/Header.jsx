import { useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import './Header.css';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`site-header ${isHome ? 'site-header-overlay' : ''}`}>
      <TopBar />
      <Navbar transparent={isHome} />
    </header>
  );
}

export default Header;