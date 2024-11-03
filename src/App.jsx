import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '/firebase';
import Header from './components/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import History from './pages/History';
import Songs from './pages/Songs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './pages/Profile';
import { AudioProvider } from './components/SongsContext/SongsContext';

const AppContent = () => {
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });
        return onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });
    }, []);

    return (
        <>
            {location.pathname !== '/history' &&
                location.pathname !== '/songs' &&
                location.pathname !== '/login' &&
                location.pathname !== '/register' &&
                location.pathname !== '/profile' &&
                (isAuthenticated || location.pathname !== '/profile') && <Header />}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Section />
                            <Footer />
                        </>
                    }
                />
                <Route path="/history" element={<History />} />
                <Route path="/songs" element={<Songs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {isAuthenticated ? (
                    <Route path="/profile" element={<Profile />} />
                ) : (
                    <Route path="/profile" element={<Login />} />
                )}
            </Routes>
        </>
    );
};

const App = () => {
    return (
        <AudioProvider>
            <Router>
                <AppContent />
            </Router>
        </AudioProvider>
    );
};
export default App;