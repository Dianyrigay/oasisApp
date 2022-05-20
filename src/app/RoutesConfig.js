import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/NavBar';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;