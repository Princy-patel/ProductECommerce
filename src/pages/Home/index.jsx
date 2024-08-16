import React from 'react';
import Sidebar from '../../components/Sidebar';
import Hero from '../../components/Hero';
import Offers from '../../components/Offers';
import Header from '../../components/Header';
import Category from '../../components/Category';

function HomePage() {
  return (
    <div>
      <main style={{ marginLeft: 250 }}>
        <Offers />
        <Header />
        <Sidebar />
        <Hero />
        <Category />
      </main>
    </div>
  );
}

export default HomePage;
