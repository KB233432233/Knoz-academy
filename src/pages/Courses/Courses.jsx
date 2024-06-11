import React, { useEffect, useState } from 'react'
import './courses.css'
import { Link } from "react-router-dom";
import CourseCard from '../course card/CourseCard';
import { useCourses } from '../../context/CoursesContext';
import AddCourseModal from '../../components/AddCourseModal/AddCourseModal';

export default function Courses() {

  const {filterByCat,openAddCourseModal,setOpenAddCourseModal} = useCourses();
  const coursesPerCategory = filterByCat(JSON.parse(sessionStorage.getItem('courses')))

    return !openAddCourseModal ? (
      coursesPerCategory.length ? (
    <div className='courses-page'>
      {coursesPerCategory.map(ele => {
        return  <div key={Object.keys(ele).at(0)}>
        <div className="courses-titles">
          <Link className="course-btn">{Object.keys(ele).at(0)}</Link>
          <button className='add-course' onClick={() => setOpenAddCourseModal(true)}>add Course</button>
          </div>
          <div className="courses-cards">
        {Object.values(ele).at(0).map(e => <CourseCard 
        photo={e.course_img ? e.course_img : null} 
        price={e.course_price} 
        duration={e.course_duration} 
        navigateTo={e._id} 
        key={e._id}
        videoCount={e.course_name}
        />
        )}
      </div>
      </div>
      })}
    </div>) : <div className='noCoursesPage'>
    <h2 className='noCourses'>no courses yet</h2>
    <button className='add-course' onClick={() => setOpenAddCourseModal(true)}>add Course</button>
    </div>
  ) : <AddCourseModal />
}
