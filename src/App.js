import './App.scss';
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
        <Routes>
        <Route path="/" element={<Form />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;