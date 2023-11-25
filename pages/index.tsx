import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <Login />
    </div>
  );
};

export default Home;