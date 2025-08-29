import react from 'react';

export default function ProgressBar({ current = 0, total = 1 }) {
    const pct = total === 0 ? 0 : Math.round(((current + 1) / total) * 100);
    return (
        <div className="progress-bar-wrapper">
            <div className="progress-track">
                <div className="progress-fill" style={{ width: `${pct}%`}} />
            </div>
            <div className="progress-text">{pct}% complete</div>
        </div>
    );
}
