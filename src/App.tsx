import React, { useState } from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
import UseAnalytics from './shared/hooks/useAnalytics';
import Wrapper from './shared/context/Wrapper';
import { Analytics } from '@vercel/analytics/react';
import DotRing from './features/customCursor/component/dotRing';
import HomePage from './features/homePage/component/homePage';
import './assets/styles/index.scss';


function App() {
  const { initializes } = UseAnalytics();

  const [loading, setLoading] = useState(true);
  const loadingScreen = document.getElementById('loadingContainer');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      setLoading(false);
    }, 2000);
  }
  return (
    <Routes>
      {!loading && (
        <React.Fragment>
          <Wrapper initialize={initializes}>
            <div className="App">
              <DotRing />
              <HomePage />
            </div>
          </Wrapper>
          <Analytics />
        </React.Fragment>
      )}
    </Routes>
  );
}

export default App;
