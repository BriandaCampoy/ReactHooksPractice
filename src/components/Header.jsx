import React, { useState, useContext } from 'react';
import ThemeContext from '@context/ThemeContext';
import '@styles/Header.css'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const hanldeClick = () => {
    setDarkMode(!darkMode);
    document.documentElement.style = 'color-scheme:light;'
    cambiarTema();
  };
  function cambiarTema() {
    var cuerpo = document.getElementsByTagName("body")[0];
    
    if (darkMode) {
      cuerpo.style.backgroundColor = "#242424";
      cuerpo.style.color = " rgba(255, 255, 255, 0.87)";
    } else {
      cuerpo.style.backgroundColor = "#ffffff";
      cuerpo.style.color = "#213547";
    }
  }
  window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e) {
    cambiarTema();
  });
  return (
    <div className="Header">
      <h1 style={{color}}>ReactHooks</h1>
      <button type="button" onClick={hanldeClick}>
        {darkMode?'DarkMode':'LightMode'}
      </button>
    </div>
  );
};

export default Header;
