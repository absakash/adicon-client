import React, { useEffect } from "react";
import bg from '../../assets/generator/bg.jpg';
import './Banner1.css'; // Make sure to import the CSS file

const Banner1 = () => {
  useEffect(() => {
    const createRaindrops = () => {
      const raindropContainer = document.getElementById('raindrop-container');
      for (let i = 0; i < 100; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        raindropContainer.appendChild(raindrop);
      }
    };
    createRaindrops();
  }, []);

  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${bg})`,
      }}>
      <div className="absolute inset-0 z-10" id="raindrop-container"></div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center z-20">
        <div className="max-w-xxl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to,</h1>
          <p className="mb-5 text-5xl font-serif">
            Adicon Power & Engineering Solution 
          </p>
          <button className="btn btn-outline btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
