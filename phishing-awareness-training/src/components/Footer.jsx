import React from 'react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <small>© {new Date().getFullYear()} PhishSafe . Privacy . Contact</small>
            </div>
        </footer>
    );
}
