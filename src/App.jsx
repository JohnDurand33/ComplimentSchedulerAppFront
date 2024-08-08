import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import RecipientView from './components/RecipientView';
import CreateRecipient from './components/CreateRecipient';
import Navbar from './components/Navbar';
import NewEvent from './components/NewEvent';
import Calendar from './components/Calendar';
import CustomMessage from './components/CustomMessage';
import { getUserSession, removeUserSession, setUserSession } from './utils/session';

const AuthContext = createContext();

const App = () => {
    const [session, setSessionState] = useState(getUserSession());

    const setSession = (userSession) => {
        setUserSession(userSession);
        setSessionState(userSession);
    };

    const clearSession = () => {
        removeUserSession();
        setSessionState(null);
    };

    return (
        <AuthContext.Provider value={{ session, setSession, clearSession }}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/recipient/:id" element={<RecipientView />} />
                    <Route path="/create-recipient" element={<CreateRecipient />} />
                    <Route path="/new-event" element={<NewEvent />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/custom-message" element={<CustomMessage />} />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default App;