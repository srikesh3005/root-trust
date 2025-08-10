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

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage key="home" onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage key="about" onPageChange={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage key="projects" onPageChange={setCurrentPage} />;
      case 'donate':
        return <DonatePage key="donate" onPageChange={setCurrentPage} />;
      case 'volunteer':
        return <VolunteerPage key="volunteer" onPageChange={setCurrentPage} />;
      case 'transparency':
        return <TransparencyPage key="transparency" onPageChange={setCurrentPage} />;
      case 'gallery':
        return <GalleryPage key="gallery" onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage key="contact" onPageChange={setCurrentPage} />;
      default:
        return <HomePage key="home" onPageChange={setCurrentPage} />;
    }
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="min-h-screen bg-white">
          <Header currentPage={currentPage} onPageChange={setCurrentPage} />
          <main>
            <AnimatePresence mode="wait">
              {renderCurrentPage()}
            </AnimatePresence>
          </main>
          <Footer onPageChange={setCurrentPage} />
        </div>
      )}
    </>
  );
}

export default App;