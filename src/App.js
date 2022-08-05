import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Routes>
    {/* <Route path='/' element={<Layout />} /> */}
    <Route path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
