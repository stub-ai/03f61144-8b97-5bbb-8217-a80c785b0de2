import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-black">
      <h1 className="text-6xl font-bold mb-4">Welcome to the Game</h1>
      <p className="text-xl mb-8">Enter the world of c0mpl3x666</p>
      <button className="p-4 bg-black text-white text-2xl font-bold transform hover:scale-110 motion-reduce:transform-none">
        Enter the Game
      </button>
    </div>
  );
};

export default Login;