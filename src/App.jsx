import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import HeaderNavlinks from './components/HeaderNavlinks/HeaderNavlinks';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderNavlinks />
      <Routes>
      <Route path="/" element={ <HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
