import React, { useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationButtons from './components/NavigationButtons';
import Slide from './components/Slide';
import Quiz from './components/Quiz';
import slides from './data/slidesData';
import quizData from './data/quizData';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mode, setMode] = useState('slides'); // 'slides' | 'quiz'

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((s) => s + 1);
    } else {
      // last slide -> start quiz
      setMode('quiz');
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide((s) => s - 1);
  };

  return (
    <div className="App">
      <Header onStart={() => setMode('quiz')} onHome={() => { setMode('slides'); setCurrentSlide(0);}} />

      <main className='container'>
        {mode === 'slides' && (
          <>
          <Slide slide={slides[currentSlide]} index={currentSlide} total={totalSlides} />
          <NavigationButtons
          onPrev={prevSlide}
          onNext={nextSlide}
          disablePrev={currentSlide === 0}
          nextLabel={currentSlide === totalSlides -1 ? 'Start Quiz' : 'Next'}
          />
          </>
        )}

        {mode === 'quiz' && (
          <Quiz quiz={quizData} onBack={() => setMode('slides')} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
