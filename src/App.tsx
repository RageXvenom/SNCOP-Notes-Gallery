import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotesGallery from './pages/NotesGallery';
import PracticeTests from './pages/PracticeTests';
import About from './pages/About';
import Developer from './pages/Developer';
import AdminPanel from './pages/AdminPanel';
import SubjectNotes from './pages/SubjectNotes';
import AdminLogin from './components/AdminLogin';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Router>
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
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;