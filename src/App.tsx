import React from 'react';
import './global.css';

import AppProvider from './hooks';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
    </>
  );
};
export default App;
