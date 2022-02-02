import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import styled from 'styled-components/macro'

import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { catchErrors } from "./utils";

// styles
import { GlobalStyle } from "./styles";

// pages
import { Login, Profile } from "./pages";


const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, .7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;

  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`

function ScrollToTop() {
  const { pahtname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pahtname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />

      <header className="App-header">
        {!token ? (
          <Login />
        ) : (
          <>
            <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>

            <Router>
              <ScrollToTop />

              <Routes>
                <Route path="/top-artists" element={<>Hey</>} />
                <Route path="/top-tracks" element={<>Hey</>} />
                <Route path="/playlists/:id" element={<>Hey</>} />
                <Route path="/playlists" element={<>Hey</>} />
                <Route path="/" element={<Profile />} />
              </Routes>
            </Router>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
