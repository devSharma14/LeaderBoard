import './App.css';
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import DashBoard from './components/DashBoard';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';

function App() {
  return (
    <Routes> {/* Define your routes */}
      <Route path="/" element={<SignUp />} /> {/* Default route */}
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/dashboard" element={<DashBoard />} /> {/* Example route */}
    </Routes>
  );
}

export default App;
