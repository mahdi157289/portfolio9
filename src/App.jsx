/**
 * File Role: Main Application Component
 * Utility: Acts as the root component that renders the active page.
 * Technical description: Currently renders the Home page directly. Prepared for routing integration.
 * Workflow inside the file:
 *  1. Imports the Home page component.
 *  2. Renders the Home component.
 * Relation with other files: The entry point for the React component tree.
 * Overall utility in the project: The shell of the application.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SkillDetail from './components/SkillDetail';
import Background from './components/Background';
import MatrixCursor from './components/MatrixCursor';

function App() {
  return (
    <Router>
      <Background />
      <MatrixCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill/:name" element={<SkillDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
