// src/App.js
import React from 'react';
import ParallaxSection from './components/ParallaxSection.jsx';
import pic1 from './assets/pic.jpg';
import f1 from './assets/f1.webp';
import c1 from './assets/c1.webp';

const App = () => {
  return (
    <div className="App">
      <div className='h-[100px] bg-black text-white flex justify-center text-3xl items-center'>Welcome to Advanteraus Parallax Animation</div>

      <ParallaxSection
        image={pic1}
        strength={200}
        content={<h1 className="text-4xl font-bold text-black backdrop-blur-3xl ">Advanture</h1>}
      />
      <div className='h-[200px] bg-black text-white flex justify-center text-3xl  items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus culpa sequi, quod animi odit nobis modi corporis nesciunt impedit non, molestias quis expedita illum perferendis aliquam? Numquam tempora laudantium minima!</div>

      <ParallaxSection
        image={f1}
        strength={400}
        content={<h2 className="text-3xl font-semibold">f1-sports</h2>}
      />
      <div className='h-[200px] bg-black text-white flex justify-center text-3xl items-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero rem, veniam nostrum voluptatem quo autem molestias, obcaecati deleniti, est molestiae sunt dignissimos commodi debitis nam ab at quis. Quos, commodi.</div>
      <ParallaxSection
        image={c1}
        strength={200}
        content={<h3 className="text-2xl font-medium">Enjoy the Parallax Effect</h3>}
      />
      <div className='h-[200px] bg-black text-white flex justify-center text-3xl items-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero rem, veniam nostrum voluptatem quo autem molestias, obcaecati deleniti, est molestiae sunt dignissimos commodi debitis nam ab at quis. Quos, commodi.</div>
    </div>
  );
};

export default App;
