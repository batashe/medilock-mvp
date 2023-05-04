import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      {/* <BrowserRouter>
      <Routes>
      <Route path="/login" component={Home}/>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
