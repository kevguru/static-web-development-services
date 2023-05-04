import { ReactNode } from 'react';
import Header from './Header';
import Subcribe from './Subcribe';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

type childProps = {
  children: ReactNode;
};

const Container = ({ children }: childProps) => {
  let location = useLocation();

  return (
    <>
      <Header />
      {children}
      {location.pathname !== '/contact' && <Subcribe />}
      <Footer />
    </>
  );
};

export default Container;
