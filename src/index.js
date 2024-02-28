// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './store/store';
import App from './containers/App';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

// Render your app inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
