import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

// import Countdown from './pages/Countdown';
import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import ChooseCategories from './pages/chooseCategories';
import Home from './pages/Home';
import { EventInfoProvider } from './contexts/EventInfoContext';
import { UserProvider } from './contexts/UserContext';

import useToken from './hooks/useToken';

export default function App() {
  return (
    <AppContainer>
      <ToastContainer />
      <EventInfoProvider>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/sign-up" element={<Enroll />} />
              <Route path="/chooseCategories" element={<ChooseCategories />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Router>
        </UserProvider>
      </EventInfoProvider>
    </AppContainer>
  );
}

export const AppContainer = styled.div`
  width: 100w;
  height:100%;
  align-items:center;
  justify-content:center;
  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }import Home from './pages/Home/index';

  }
`;
