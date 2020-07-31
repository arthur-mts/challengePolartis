import React from 'react';
import Home from './pages/Home';

// import { Container } from './styles';

import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Home />
  </>
);
export default App;
