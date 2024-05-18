import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intron from './pages/Intro/Intorn'
import Cards from './pages/Cards/Cards'
import OnlineCourses from './pages/online-courses/OnlineCourses';
import StudentOpinionsSec from './pages/students opinios/StudentOpiniosSec';
import Footer from './pages/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>

        <Intron />
        <Cards />
        <OnlineCourses />
        <StudentOpinionsSec />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
