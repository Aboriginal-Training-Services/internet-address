import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Training from './pages/Training';
import IndigenousRelations from './pages/IndigenousRelations';
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/indigenous-relations" element={<IndigenousRelations />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;