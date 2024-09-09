import { useRef, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const headerRef = useRef<null | HTMLElement>(null);
  const navbarRef = useRef<null | HTMLDivElement>(null);
  const [isNavbar, setIsNavbar] = useState<boolean>(false);

  const navigate = useNavigate();

  const menu = [
    { name: 'Home', link: '/' },
    { name: 'About us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Blog', link: '/blog' },
  ];

  const navbarHandler = () => {
    setIsNavbar(!isNavbar);
    isNavbar ? (navbarRef.current!.style.display = 'none') : (navbarRef.current!.style.display = 'flex');
    navbarRef.current?.classList.toggle('show');
    console.log(navbarRef);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        headerRef.current?.classList.add('fixed');
      } else {
        headerRef.current?.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" ref={headerRef}>
      <div className="logo">
        <NavLink to="/">
          <img 
            src="/kevgurulogowhite-modified.png" 
            alt="KevGuru Logo" 
            style={{ height: '40px' }} 
          />
        </NavLink>
      </div>
      <div className="navbar" ref={navbarRef}>
        <ul className="menu">
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="btn__contact" onClick={() => {
            navigate('/contact');
          }}>
          Contact us
        </button>
      </div>
      <button className="btn__navbar hidden" onClick={navbarHandler}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
