import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import PageLayout from './layout/Header';
import { DashboardScreen } from './screens/DashboardScreen';
import { MusicScreen } from './screens/MusicScreen';
import { EventScreen } from './screens/EventScreen';
import { SettingScreen } from './screens/SettingScreen';
import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom';
import { SignInScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignUpScreen';

import { getCurrentUser } from './lib/api/adminAuth';
import { User } from './interfaces';

export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser]:any = useState();

  const handleGetCurrentUser = async () => {
    console.log("ggaggagagag")
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
        console.log(res?.data.data);
      } else {
        console.log('no current user');
      }
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  const Private = ({ children }: any) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return redirect('/Login');
      }
    } else {
      return <></>;
    }
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
      <Routes>
          <Route path={`/`} element={<DashboardScreen />} />
          <Route path={`/delivery-music`} element={<MusicScreen />} />
          <Route path={`/event-setting`} element={<EventScreen />} />
          <Route path={`/settings`} element={<SettingScreen />} />
        <Route path={`/Login`} element={<SignInScreen />} />
        <Route path={`/SignUp`} element={<SignUpScreen />} />
      </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
