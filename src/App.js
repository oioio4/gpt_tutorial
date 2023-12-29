import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import { motion } from "framer-motion";
import './App.css';

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}

function Box() {
  return (
    <div
      style={{
        padding: 40,
        background: "white",
        display: "inline-block",
        borderRadius: 5
      }}
    />
  );
}



const App = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: 'Manrope',
  };
  return (
    <div className="App">
      <div className="squares">
        <p style={mystyle}>Scroll down</p>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Box />
        </FadeInWhenVisible>
      </div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3/>
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
