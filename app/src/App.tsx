import React from 'react';
import './App.css';
import PageLayout from './layout/Header';
import { DashboardScreen } from './screens/DashboardScreen';
import { MusicScreen } from './screens/MusicScreen';
import { EventScreen } from './screens/EventScreen';
import { SettingScreen } from './screens/SettingScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/dashboard`} element={<DashboardScreen />} />
        <Route path={`/delivery-music`} element={<MusicScreen />} />
        <Route path={`/event-setting`} element={<EventScreen />} />
        <Route path={`/settings`} element={<SettingScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
