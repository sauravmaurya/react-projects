import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
// import { Provider } from './context/books';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from './context/events';

const el = document.getElementById("root")
const root = ReactDOM.createRoot(el)

// root.render(<Provider>
//     <App />
// </Provider>)

root.render(<Provider><App /></Provider>)