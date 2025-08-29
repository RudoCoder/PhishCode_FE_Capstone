import React from 'react';

export default function Result({ score = 0, total = 0, onRetry = () => {} }) {
    const pass = total > 0 ? score / total >= 0.7 : false;
    return (
        <div className="result-card">
            <h2>Quiz Result</h2>
            <p>You scored <strong>{score}</strong> out of <strong>{total}</strong>.</p>

            {pass? (
                <p className="result-pass">Congratulations! You passed the quiz.</p>
            ) : (
                <p className="result-fail">You didn't pass. Please Review the module and try again.</p>
            )}

            <div className="result-actions">
                <button className="btn primary" onClick={onRetry}>Retry quiz</button>
            </div>
        </div>
    );
}
