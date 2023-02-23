import logo from './logo.svg';
import './App.css';
import Main_Navbar from "./Components/Navbar/Main_Navbar";
import { useEffect } from "react";
import Allroutes from './Routes/Allroutes';

function App() {
  useEffect(() => {
    document.title = "ShopNow";
  }, []);

  return (
    <div className="App">
        <Main_Navbar/>
        <Allroutes/>
    </div>
  );
}

export default App;
