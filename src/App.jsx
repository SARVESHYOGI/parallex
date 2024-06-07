// src/App.js
import React from 'react';
import ParallaxSection from './components/ParallaxSection.jsx';
import pic1 from './assets/pic.jpg';

const App = () => {
  return (
    <div className="App">
      <ParallaxSection
        image={pic1}
        strength={500}
        content={<h1 className="text-4xl font-bold">Welcome to Parallax Animation</h1>}
      />
      <ParallaxSection
        image="https://media.istockphoto.com/id/2022894445/vector/ocean-seascape-background.jpg?s=2048x2048&w=is&k=20&c=p7kLJjAlGPEYAqe_5n7VvjLN_TMuYdqBBVlQFazSc1w="
        strength={300}
        content={<h2 className="text-3xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum architecto exercitationem laudantium esse est sint dolorem facere commodi cum quos. Dignissimos fugit beatae quaerat perferendis. Molestias impedit animi delectus architecto.</h2>}
      />
      <div className='h-screen bg-black text-white flex justify-center items-center'>hi</div>
      <ParallaxSection
        image="https://media.istockphoto.com/id/1297440350/vector/spring-landscape.jpg?s=2048x2048&w=is&k=20&c=H-fdRqgApW4CBj1V1q16Ln90-On44qryHCJNAIf4Sj0="
        strength={300}
        content={<h3 className="text-2xl font-medium">Enjoy the Parallax Effect</h3>}
      />
    </div>
  );
};

export default App;
