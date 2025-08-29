import React from 'react';

export default function Header({ onStart = () => {}, onHome = () => {} }) {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <div className="logo" onClick={onHome} role="button" tabindex={0}>
                    PhishSafe
                </div>

                <nav className="main-nav">
                    <button className="nav-link" onClick={onStart}>Start Training</button>
                </nav>
            </div>
        </header>
    );
}
