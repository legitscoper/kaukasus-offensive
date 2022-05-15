//1st executed file, renders whole app on App.js file.

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "leaflet/dist/leaflet.css";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
