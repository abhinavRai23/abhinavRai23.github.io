import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base.css'
import App from './App'
// import ErrorBoundary from './ErrorBoundary';

// eslint-disable-next-line no-undef
const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
