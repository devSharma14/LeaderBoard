import './App.css';
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import LeaderBoard from './components/LeaderBoard';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import Form from "./components/form/Form";
import LC_dashboard from './components/LC_dashboard';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Routes> {/* Define your routes */}
        <Route path="/" element={<SignUp />} /> {/* Default route */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/leaderboard" element={<LeaderBoard />} /> {/* Example route */}
        <Route path="/dashboard" element={<LC_dashboard />} />
        {/* <Route path="/cfdashboard" element={<CF_dashboard />} />
        <Route path="/ccdashboard" element={<CC_dashboard />} /> */}
        <Route path="/form" element={<Form />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
