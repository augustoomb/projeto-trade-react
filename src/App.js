// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DataFilter from './pages/DataFilter';
import TeamData from './pages/TeamData';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/datafilter" element={ <DataFilter /> } />
        <Route path="/teamdata" element={ <TeamData /> } />
      </Routes>
    </main>
  );
}

export default App;
