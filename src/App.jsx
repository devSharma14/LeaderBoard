import './App.css';
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import LeaderBoard from './components/LeaderBoard';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import DashBoard from './components/DashBoard';
import Form from "./components/form/Form";

function App() {
  return (
    <Routes> {/* Define your routes */}
      <Route path="/" element={<SignUp />} /> {/* Default route */}
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/leaderboard" element={<LeaderBoard />} /> {/* Example route */}
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/form" element={<Form/>} />
    </Routes>
  );
}

export default App;
