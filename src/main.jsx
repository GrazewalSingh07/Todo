import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {Provider} from  "react-redux"
import { store } from './Redux/store'
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChakraProvider>
    <Provider store={store}>
      <App/>
    </Provider>
    </ChakraProvider>
  </BrowserRouter>
)
