import React, { useEffect, useState, useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  console.log(element);
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    if (callback && callback === "function") {
      callback(false);
    }
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen) {
      document.exitFullscreen();
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" />
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
