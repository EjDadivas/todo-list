import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodosProvider } from './context/TodosContext';
import'./theme/bootstrap2.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodosProvider>
    <App />
    </TodosProvider>
  </React.StrictMode>
);
