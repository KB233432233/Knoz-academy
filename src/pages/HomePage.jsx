import React, { useEffect } from 'react'
import Cards from './Cards/Cards'
import OnlineCourses from './online-courses/OnlineCourses';
import StudentOpinionsSec from './students opinios/StudentOpiniosSec';
import Footer from './Footer/Footer'
import Intron from './Intro/Intorn'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

  // const navigate = useNavigate()

  const isRegistered = () => {
    return localStorage.getItem('user') ? true : false;
  }

  // useEffect(() => {
  //   !isRegistered() ? navigate('/account/login') : null
  // },[])

  return (
    <>
       <Intron />
        <Cards />
        <OnlineCourses />
        <StudentOpinionsSec />
        <Footer />
    </>
  )
}
