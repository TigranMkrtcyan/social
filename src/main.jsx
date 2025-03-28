import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store/store.js'
import validation from './schema/schema.js'
import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App valid = {validation}/>
  </Provider>
  </BrowserRouter>
)
