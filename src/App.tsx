import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
// import history from './services/history';
import { Toast } from './styles/toast';
import Header from './components/Header'
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
      <Toast autoClose={2000} />
    </>
  );
};

export default App;
