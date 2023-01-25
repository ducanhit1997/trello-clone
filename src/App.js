import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom'
import BoardDetail from './components/boards/detail';
import Boards from './components/boards';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Boards />} />
        <Route path='/board/:id/' element={<BoardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
