import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './Routes'
import { Provider } from 'react-redux'
import { store } from './Store'

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RoutesComponent />
      </Provider>
    </BrowserRouter>
  )
}
