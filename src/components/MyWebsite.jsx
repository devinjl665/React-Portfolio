import Header from './Header';
import Footer from './Footer';

import AboutMe from './contentPages/AboutMe';
import Contact from './contentPages/Contact';
import Portfolio from './contentPages/Portfolio';
import Resume from './contentPages/Resume';

import { useState } from 'react';

function Main() {

  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );


}

export default Main;