import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import Store from './state/store'
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={Store}>
    <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)



 