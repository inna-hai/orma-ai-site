import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1) || 'home';

    return (
        <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'linear-gradient(160deg, #0a0515 0%, #1e0a3c 50%, #2a1453 100%)' }}>
            <div className="max-w-md w-full text-center">
                <h1 className="text-8xl font-light text-white/20 mb-4">404</h1>
                <div className="h-px w-16 bg-white/20 mx-auto mb-6"></div>
                <h2 className="text-2xl font-medium text-white mb-3">העמוד לא נמצא</h2>
                <p className="text-white/60 leading-relaxed mb-8">
                    העמוד <span className="text-white/80">&quot;{pageName}&quot;</span> לא קיים.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#1e0a3c] bg-white rounded-full hover:bg-white/90 transition-colors"
                >
                    חזרה לדף הבית
                </Link>
            </div>
        </div>
    );
}
