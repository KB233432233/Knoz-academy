import React from 'react'
import { useParams } from 'react-router-dom'
import photo0 from '../../assets/what-is-html-3.webp'
import photo1 from '../../assets/js.png'
import photo2 from '../../assets/CSS_Course.jpg'
import './coursePage.css'


function CoursePage() {
 
 const {id} = useParams();

 const arr = [
    {
        videoCount: 40,
        price: '120$',
        duration: '3 months',
        name: 'html',
        photo: photo0,
    },
    {
        videoCount: 40,
        price: '120$',
        duration: '3 months',
        name: 'js',
        photo: photo1
    },
    {
        videoCount: 40,
        price: '120$',
        duration: '3 months',
        name: 'css',
        photo: photo2
    }
 ]
 
    return (
    <div className='course-page'>
      <h1>{arr[id].name}</h1>
      <img src={arr[id].photo} alt="" />
      <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, officiis molestiae? Doloribus nulla enim minus fugiat nihil, assumenda quidem deleniti odit praesentium impedit veritatis cupiditate aperiam minima consectetur amet quas!</p>
      <div className='p'>
      <p>duration {arr[id].duration}</p>
      <p>price {arr[id].price}</p>
      </div>
      <button>Enroll</button>
    </div>
  )
}

export default CoursePage
