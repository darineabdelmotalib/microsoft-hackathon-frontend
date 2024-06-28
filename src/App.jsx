import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import HeaderNavlinks from './components/HeaderNavlinks/HeaderNavlinks';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderNavlinks />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
