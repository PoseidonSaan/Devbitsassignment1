
import BottomPage from './components/BottomPage';
import BusinessLaw from './components/ContactUs';
import CivilDispute from './components/CivilDispute';
import ConstitutionalLaw from './components/ConstitutionalLaw';
import CriminalLaw from './components/CriminalLaw';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';
import TopPage from './components/TopPage';
import { Routes, Route, Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/loginpage" element = {<LoginPage />} />
        <Route path ="/dashboard" element = {<Dashboard />} />
      </Routes>
      {/* <TopPage />
      <NavBar /> 
      <LoginPage />
      <Home />
      <BusinessLaw />
      <CivilDispute />
      <ConstitutionalLaw />
      <CriminalLaw />
      <BottomPage /> */}
      <BottomPage></BottomPage>
    </div>
  );
}

export default App;
