import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import HeaderNavlinks from './components/HeaderNavlinks/HeaderNavlinks';
import ProfileCard from './components/ProfileCard/ProfileCard';

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
