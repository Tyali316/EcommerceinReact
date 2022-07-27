import React from 'react';
import Announcements from '../components/Announcements';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Slider from '../components/Slider';



function Home() {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Newsletter />
      <Catalog />
      <Footer />
    </div>
  );
}

export default Home;