import './App.css';
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import { Route,Routes } from 'react-router-dom';
import Homes from './pages/Homes';
import Women from './pages/Women';


function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Homes/>}/>
      <Route path="/women" element={<Women/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
