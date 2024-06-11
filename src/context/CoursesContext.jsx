import {  createContext, useContext, useState,useEffect } from "react";
import axios from "axios";


const coursesContext = createContext();



export const CoursesProvider = ({children}) => {

  const [courseVideos , setCourseVideos] = useState([]);
  const [courses , setCourses] = useState([]);
  const [selectedCourse , setSelectedCourse] = useState(null)
  const [editModal ,setEditModal] = useState(false)
  const [openAddCourseModal , setOpenAddCourseModal] = useState(false)
  const [openAddVideoModal,setOpenAddVideoModal] = useState(false)
  const [skeleton ,setSkeleton] = useState(false)
  const [addSkillsModal , setAddSkillsModal]= useState(false)
  const [course,setCourse] = useState('nothing to show');

    async function fetchd () {
        const courses = await axios.get('/courses');
        setCourses(courses.data)
        sessionStorage.setItem('courses',JSON.stringify(courses.data));
      }
      
      useEffect(() => {
        fetchd();
      },[])


      const filterCourses = (id) => {
        const course = courses.find((e) => e._id == id);
        setSelectedCourse(course)
        sessionStorage.setItem('selectedCourse',JSON.stringify(course));
    }

    const filterVideos = (id) => {
        const vid = courseVideos.find((vid_id) => id === vid_id._id)
        sessionStorage.setItem('vid',JSON.stringify(vid))
    }


    function filterByCat(arr) {
      const set = new Set();
      arr.map(ele => {
        set.add(ele.category);
      })
  
      const coursesPerCategory = [];
      var obj = {}
      set.forEach(e => {
        obj[e] = courses.filter(el => e == el.category);
        coursesPerCategory.push(obj);
        obj = {}
      })
      return coursesPerCategory;
    }

    const getCourseVideos = async (id) => {
        
        try {
              const res = await axios.get('/courses/get-course/'+ id);
              setCourseVideos(res.data)
        } catch (error) {
            console.log(error);
        }
    }


    return <coursesContext.Provider value={{
      filterCourses,
      courses,
      courseVideos,
      selectedCourse,
      getCourseVideos,
      setEditModal,
      editModal,
      filterVideos,
      course,
      setCourse,
      filterByCat,
      openAddCourseModal,
      setOpenAddCourseModal,
      skeleton,
      setSkeleton,
      openAddVideoModal,
      setOpenAddVideoModal,
      addSkillsModal,
      setAddSkillsModal
      }} >
        {children}
    </coursesContext.Provider>
}

export const useCourses = () => useContext(coursesContext)