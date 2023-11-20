import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Footer from './Footer';
import Elevate from './pages/Elevate';

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Products') {
      return <Products />;
    }

    if (currentPage === 'Reviews') {
      return <Reviews />;
    }

    if (currentPage === 'Gallery') {
      return <Gallery />;
    }

    if (currentPage === 'Categories') {
      return <Categories />;
    }

    if (currentPage === 'Login') {
      return <Login />;
    }

    if (currentPage === 'Elevate') {
      return <Elevate />;
    }

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    
      <main className="mx-3">{renderPage()}</main>
      <Footer />
    </div>
  );
}
