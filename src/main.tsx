import { configureStore } from '@reduxjs/toolkit'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { counter } from './reducers/counter.ts'



const store = configureStore({
  reducer: {
    counter: counter.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
