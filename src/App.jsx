
import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContext'
import Homepage from './pages/Homepage/Homepage'


function App() {
  const apiKey= import.meta.env.VITE_API_KEY;
  const baseUrl= "https://api.themoviedb.org/3"
 

  return (
    <BrowserRouter>
    <ThemeContextProvider>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage apiKey={apiKey} baseUrl={baseUrl}/>} />
       
      

      
    </Routes>
    </ThemeContextProvider>
    </BrowserRouter>
  )
}


export default App
