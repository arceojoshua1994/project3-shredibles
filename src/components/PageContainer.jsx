import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './Footer';

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

    if (currentPage === 'Contact') {
      return <Contact />;
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
