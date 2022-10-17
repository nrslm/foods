import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./Default.css"
import { BrowserRouter } from "react-router-dom"
import { store } from './store/store'
import { Provider } from 'react-redux'
import { MantineProvider } from "@mantine/core"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider
    inherit
    theme={{
      defaultGradient: {
        from: 'orange',
        to: 'red',
        deg: 45,
      },
      colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      }
    }}
  >
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </MantineProvider>


);
