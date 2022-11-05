import React from 'react';
import ReactDOM from 'react-dom';
import { AutoContextProvider } from './store/auth-context';
import './index.css';
import App from './App';

ReactDOM.render(<AutoContextProvider><App /></AutoContextProvider>, document.getElementById('root'));
