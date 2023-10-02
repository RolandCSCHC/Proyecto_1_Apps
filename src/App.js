import React from 'react';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import TripPage from './components/TripPage/TripPage'; 
import LoginPage from './components/LoginPage/LoginPage'; 
import TripsPage from './components/TripsPage';
import BottomBar from './components/BottomBar/BottomBar';
import TopNav from './components/TopNav/TopNav';
import HomePage from './components/HomePage/HomePage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import MapPage from './components/MapPage/MapPage';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="App__content">
          <TopNav />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/trips" element={<TripsPage />} />
            <Route exact path="/friends" element={<FriendsPage />} />
            <Route exact path="/map" element={<MapPage />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/trip/:tripId" element={<TripPage />} />
          </Routes>
        </div>
        <BottomBar />
      </HashRouter>
    </div>
  );
}

export default App;