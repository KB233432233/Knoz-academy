import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intron from './pages/Intro/Intorn'
import Cards from './pages/Cards/Cards'
import OnlineCourses from './pages/online-courses/OnlineCourses';
import StudentOpinionsSec from './pages/students opinios/StudentOpiniosSec';
import Footer from './pages/Footer/Footer'
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
