import React from 'react';
import { render } from 'react-dom';
import './styles/base.css';
import App from './App';
// import ErrorBoundary from './ErrorBoundary';

render(
    // <ErrorBoundary>
    <App />,
    // </ErrorBoundary>,
    // eslint-disable-next-line no-undef
    document.getElementById('root'),
);
