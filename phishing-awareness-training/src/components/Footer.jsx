import React from 'react';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <small>© {new Date().getFullYear()} PhishSafe . Privacy . Contact</small>
            </div>
        </footer>
    );
}

export default Footer;
