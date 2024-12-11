//El archivo main.jsx es el punto de entrada principal de tu aplicación React. Es donde se conecta tu aplicación React
// con el DOM (el HTML de tu página web)

import React from 'react'; // Importa React
import { createRoot } from 'react-dom/client'; // Importa la API de React DOM
import App from './App.jsx'; // Importa el componente raíz (App)
import './index.css'; // Estilos globales opcionales

// Selecciona el contenedor en el DOM
const rootElement = document.getElementById('root');

// Crea el "root" de React y renderiza el componente App
createRoot(rootElement).render(
  <App />
);