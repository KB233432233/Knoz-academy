import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CoursePage from './pages/course page/CoursePage';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/:id' element={<CoursePage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
