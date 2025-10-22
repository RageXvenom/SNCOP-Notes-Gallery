import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotesGallery from './pages/NotesGallery';
import PracticeTests from './pages/PracticeTests';
import About from './pages/About';
import Developer from './pages/Developer';
import AdminPanel from './pages/AdminPanel';
import SubjectNotes from './pages/SubjectNotes';
import AdminLogin from './components/AdminLogin';
import Login from './pages/Login';
import Register from './pages/Register';
import AIChat from './pages/AIChat';
import Profile from './pages/Profile';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import './App.css';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return user ? <>{children}</> : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<NotesGallery />} />
            <Route path="/notes/:subject" element={<SubjectNotes />} />
            <Route path="/practice-tests" element={<PracticeTests />} />
            <Route path="/about" element={<About />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/ai-chat"
              element={
                <ProtectedRoute>
                  <AIChat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DataProvider>
          <Router>
            <AppRoutes />
          </Router>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;