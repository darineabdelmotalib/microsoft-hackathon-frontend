import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import HeaderNavlinks from './components/HeaderNavlinks/HeaderNavlinks';
import HomePage from "./pages/HomePage/HomePage"
import TrainingStart from './pages/TrainingStart/TrainingStart';
import Training from './pages/Training/Training';
import TrainingInfo from "./pages/TrainingInfo/TrainingInfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderNavlinks />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/training" element={<Training />}></Route>
        <Route path="/training/start" element={<TrainingStart />}></Route>
        <Route path="/training/info" element={<TrainingInfo />}></Route>

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
