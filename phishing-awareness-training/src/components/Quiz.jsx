import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Result from './Result';

function Quiz({ quiz = [], onBack = () => {} }) {
    const total = quiz.length;
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState(() => {
        try {
            const raw = localStorage.getItem('phish_answers');
            return raw ? JSON.parse(raw) : Array(total).fill(null);
        } catch {
            return Array(total).fill(null);
        }
    });
    const [reveal, setReveal] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (answers.length !== total) setAnswers(Array(total).fill(null));
    }, [total]);

    useEffect(() => {
        try {
            localStorage.setItem('phish_answers', JSON.stringify(answers));
        } catch {}
    }, [answers]);

    const selectOption = (index) => {
        const next = [...answers];
        next[current] = index;
        setAnswers(next);
    };

    const calculateScore = () => {
        let sc = 0;
        quiz.forEach((q, i) => {
            const sel = answers[i];
            if (sel !== null && q.options[sel] && q.options[sel].correct) sc += 1;
        });
        return sc;
    };

    const handleSubmit = () => {
        const sc = calculateScore();
        setScore(sc);
        setReveal(true);
        localStorage.setItem('phish_score', sc);
    };

    const handleRetry = () => {
        const empty = Array(total).fill(null);
        setAnswers(empty);
        setReveal(false);
        setScore(0);
        setCurrent(0);
        localStorage.removeItem('phish_answers');
        localStorage.removeItem('phish_score');
    };

    if (total === 0) return <p>No quiz questions found.</p>;

    if (reveal) {
        return <Result score={score} total={total} onRetry={handleRetry} />;
    }

    const q = quiz[current];

    return (
        <section className="quiz-card">
            <div className="quiz-header">
                <button className="btn ghost" onClick={onBack}>Back to Slides</button>
                <h2>Question {current + 1} of {total}</h2>
            </div>

            <ProgressBar current={current} total={total} />

            <div className="question-block">
                <h3>{q.question}</h3>
                <div className="options-grid">
                    {q.options.map((opt, idx) => {
                        const selected = answers[current] === idx;
                        // When results aren't revealed, we use highlight for selection only
                        const className = [
                            'quiz-option',
                            selected ? 'selected-option' : '',
                        ].join(' ').trim();

                        return (
                            <button
                                key={idx}
                                className={className}
                                onClick={() => selectOption(idx)}
                                aria-pressed={selected}
                            >
                                {opt.text}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="quiz-actions">
                <div>
                    <button className="btn secondary" onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0}>Previous</button>
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                    {current < total - 1 && (
                        <button className="btn primary" onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}>Next</button>
                    )}

                    {current === total - 1 && (
                        <button className="btn success" onClick={handleSubmit}>Submit Quiz</button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Quiz;

