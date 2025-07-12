import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FlightBooking from './components/FlightBooking';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import Login from './components/Login';
import Contact from './components/Contact';
import Treatment from './components/Treatment';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleShowLogin = () => setCurrentView('login');
    const handleShowContact = () => setCurrentView('contact');
    const handleShowTreatment = () => setCurrentView('treatment');
    
    window.addEventListener('showLogin', handleShowLogin);
    window.addEventListener('showContact', handleShowContact);
    window.addEventListener('showTreatment', handleShowTreatment);
    
    return () => {
      window.removeEventListener('showLogin', handleShowLogin);
      window.removeEventListener('showContact', handleShowContact);
      window.removeEventListener('showTreatment', handleShowTreatment);
    };
  }, []);

  if (currentView === 'login') {
    return <Login onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'contact') {
    return <Contact onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'treatment') {
    return <Treatment onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onChatToggle={() => setIsChatOpen(!isChatOpen)} />
      <Hero />
      <div className="bg-white">
        <About />
        <Services />
        <FlightBooking />
      </div>
      <Footer />
      <ChatAssistant 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
}

export default App;