
import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContext'


function App() {
 

  return (
    <BrowserRouter>
    <ThemeContextProvider>
    <Header />
    <Routes>
      <Route>
      

      </Route>
    </Routes>
    </ThemeContextProvider>
    </BrowserRouter>
  )
}


export default App
