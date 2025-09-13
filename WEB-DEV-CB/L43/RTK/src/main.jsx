import { createRoot } from 'react-dom/client'
import{Provider} from 'react-redux'
import { store } from './store/store.js'
import { Counter } from './components/Counter.jsx'
import Todos from './components/Todos.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
    <Todos />
  </Provider>,
)
