import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ConsentBanner from "./components/ConsentBanner";
import AnalyticsWrapper from "./components/AnalyticsWrapper";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute requireRole="admin">
              <div className="min-h-screen bg-bg-primary flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-text-primary mb-4">Admin Panel</h1>
                  <p className="text-text-secondary">This is a protected admin area.</p>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AnalyticsWrapper />
      <ConsentBanner />
    </BrowserRouter>
  </AuthProvider>
);

export default App;