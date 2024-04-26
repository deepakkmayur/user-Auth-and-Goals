import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Header from './components/Header';

function App() {
  
  return (
    // <>
    <BrowserRouter>
    <div className="container">
    <Header/>
    <Routes>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    // </>
  );
}

export default App;
