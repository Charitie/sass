import React from 'react';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/contents/Sidebar';
import MainContent from './components/contents/MainContent';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>

    </div>
  );
}

export default App;
