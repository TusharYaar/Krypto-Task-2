import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Grid from './pages/Grid';
import Sidebar from "./components/Sidebar";

import "./App.css";

const App = () => {
  return (
    <>
    <Sidebar/>
    <div className='app-body-container'>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/grid" element={<Grid />} />
    </Routes>
    </div>
    </>
  )
}

export default App;
