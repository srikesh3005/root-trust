import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import DonatePage from './pages/DonatePage';
import VolunteerPage from './pages/VolunteerPage';
import TransparencyPage from './pages/TransparencyPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Handle preloader completion
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // 3s loading + 1s fade out
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    if (!isLoading) {
      // Small delay to allow page transition to start
      const scrollTimer = setTimeout(() => {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      }, 100);

      return () => clearTimeout(scrollTimer);
    }
  }, [currentPage, isLoading]);

  // Enhanced page change handler
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage key="home" onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage key="about" onPageChange={handlePageChange} />;
      case 'projects':
        return <ProjectsPage key="projects" onPageChange={handlePageChange} />;
      case 'donate':
        return <DonatePage key="donate" onPageChange={handlePageChange} />;
      case 'volunteer':
        return <VolunteerPage key="volunteer" onPageChange={handlePageChange} />;
      case 'transparency':
        return <TransparencyPage key="transparency" onPageChange={handlePageChange} />;
      case 'gallery':
        return <GalleryPage key="gallery" onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage key="contact" onPageChange={handlePageChange} />;
      default:
        return <HomePage key="home" onPageChange={handlePageChange} />;
    }
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="min-h-screen bg-white">
          <Header currentPage={currentPage} onPageChange={handlePageChange} />
          <main>
            <AnimatePresence mode="wait">
              {renderCurrentPage()}
            </AnimatePresence>
          </main>
          <Footer onPageChange={handlePageChange} />
        </div>
      )}
    </>
  );
}

export default App;