import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import RequireAuth from './auth/RequireAuth';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Home from './home';
import CSCore from './subpages/csCore';
import IntroComputing from './subpages/introComputing';
import MathCourses from './subpages/mathCourses';
import CSElectives from './subpages/csElectives';
import CSPracticumProject from './subpages/csPracticumProject';
import './App.css';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/csCore" element={<CSCore />} />
          <Route path="/introComputing" element={<IntroComputing />} />
          <Route path="/mathCourses" element={<MathCourses />} />
          <Route path="/csElectives" element={<CSElectives />} />
          <Route path="/csPracticumProject" element={<CSPracticumProject />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}