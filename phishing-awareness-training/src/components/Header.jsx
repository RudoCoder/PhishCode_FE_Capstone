import React from 'react';

function Header({ onStart = () => {}, onHome = () => {}, onLogout = () => {} }) {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <div
                    className="logo"
                    onClick={onHome}
                    role="button"
                    tabIndex={0} // fixed lowercase `tabindex` to `tabIndex`
                >
                    PhishSafe
                </div>

                <nav className="main-nav">
                    <button className="nav-link" onClick={onStart}>Start Quiz</button>
                    <button className="nav-link" onClick={onLogout}>Logout</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
