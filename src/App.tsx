import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLayout from './components/admin/AdminLayout';
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import BlogsPage from './pages/admin/BlogsPage';
import SettingsPage from './pages/admin/SettingsPage';
import AuthGuard from './components/AuthGuard';
import useAuthStore from './store/authStore';

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route
          path="/admin/*"
          element={
            <AuthGuard>
              <AdminLayout>
                <Routes>
                  <Route index element={<DashboardPage />} />
                  <Route path="blogs" element={<BlogsPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                </Routes>
              </AdminLayout>
            </AuthGuard>
          }
        />
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Navbar />
              <Hero />
              <Services />
              <Blog />
              <About />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;