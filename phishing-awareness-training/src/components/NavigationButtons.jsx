import React from 'react';

function NavigationButtons({ onPrev, onNext, disablePrev = false, disableNext = false, nextLabel = 'Next'}) {
    return (
        <div className="nav-buttons">
            <button className="btn secondary" onClick={onPrev} disabled={disablePrev}>Previous</button>
            <button className="btn primary" onClick={onNext} disabled={disableNext}>{nextLabel}</button>
        </div>
    );
}

export default NavigationButtons;
