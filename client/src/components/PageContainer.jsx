import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Home';
import About from './About';
import Products from './Products';
import Gallery from './Gallery';
import Reviews from './Reviews';
import Categories from './Categories';
import Login from './Login';
import Footer from './Footer';
import Categories from './pages/Categories';

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
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

    if (currentPage === 'Login') {
      return <Login />;
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