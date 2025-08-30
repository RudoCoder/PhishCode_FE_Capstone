// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationButtons from './components/NavigationButtons';
import Slide from './components/Slide';
import Quiz from './components/Quiz';
import Login from './components/Login';
import slides from './data/slidesData';
import quizData from './data/quizData';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mode, setMode] = useState('login'); // 'login' | 'slides' | 'quiz'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((s) => s + 1);
    } else {
      setMode('quiz'); // last slide -> start quiz
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide((s) => s - 1);
  };

  const handleLogin = (success) => {
    if (success) {
      setIsLoggedIn(true);
      setMode('slides');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMode('login');
    setCurrentSlide(0);
  };

  return (
    <div className="App">
      {isLoggedIn && (
        <Header
          onStart={() => setMode('quiz')}
          onHome={() => { setMode('slides'); setCurrentSlide(0); }}
          onLogout={handleLogout}
        />
      )}

      <main className="container">
        {!isLoggedIn && mode === 'login' && (
          <Login onLogin={handleLogin} />
        )}

        {isLoggedIn && mode === 'slides' && (
          <>
            <Slide
              slide={slides[currentSlide]}
              index={currentSlide}
              total={totalSlides}
            />
            <NavigationButtons
              onPrev={prevSlide}
              onNext={nextSlide}
              disablePrev={currentSlide === 0}
              nextLabel={currentSlide === totalSlides - 1 ? 'Start Quiz' : 'Next'}
            />
          </>
        )}

        {isLoggedIn && mode === 'quiz' && (
          <Quiz quiz={quizData} onBack={() => setMode('slides')} />
        )}
      </main>

      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
