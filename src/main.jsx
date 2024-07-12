import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import MyPolls from './pages/MyPolls/MyPolls.jsx';
import ContextProvider from './Context/ContextProvider.jsx';
// import Poll from './pages/Polls/Poll/Poll.jsx';
import CreatePoll from './pages/Polls/Create-poll/CreatePoll.jsx';
import Results from './pages/Results/Results.jsx';
// import NotFound from './pages/404-page/NotFound.jsx';
// import VotedUsers from './pages/Voted-Users/VotedUser.jsx';
// import Subscription from './pages/Subscriptions/Subscription.jsx';
import Home from './pages/Home/Home.jsx';
// import CreatePollChain from './pages/Polls/Create-Poll-Chain/CreatePollChain.jsx';
// import PollChains from './pages/Polls/PollChains/PollChains.jsx';
// import PollChain from './pages/Polls/Poll-Chain/PollChain.jsx';
// import Footer from './components/Footer/footer.jsx';
import PrivacyPolicy from './pages/Privacy-policy/Privacy.jsx';
import About from './pages/About/About.jsx';

// import App from './App'
import './index.css';
import Account from './pages/Account/Account.jsx';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  // {
  //   path: '/voted-users/:pollId',
  //   element: <VotedUsers />,
  // },
  {
    path: '/poll/results/:pollId',
    element: <Results />,
  },
  {
    path: '/create-poll',
    element: <CreatePoll />,
  },
  // {
  //   path: '/poll/:pollId',
  //   element: <Poll />,
  // },
  {
    path: '/polls',
    element: <MyPolls />,
  },
  // {
  //   path: '/subscribe',
  //   element: <Subscription />,
  // },
  // {
  //   path: '/create-poll-chain',
  //   element: <CreatePollChain />,
  // },
  // {
  //   path: '/my-poll-chains',
  //   element: <PollChains />,
  // },
  // {
  //   path: '/poll-chain/:id',
  //   element: <PollChain />,
  // },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </ContextProvider>
  </React.StrictMode>
);
