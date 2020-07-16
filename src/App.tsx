import React from 'react';
import './global.css';

import { AuthProvider } from './context/AuthContext';
import ToastContainer from './components/ToastContainer';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />

        <ToastContainer />
      </AuthProvider>
    </>
  );
};
export default App;
