import { useEffect, useState } from "react";
import "./Profile.css";
import avatar from "../../assets/study.jpg";
import Modal from "../../components/Modal/Modal";
import { useCourses } from "../../context/CoursesContext";
import { useNavigate } from "react-router-dom";
import {IoIosAdd} from 'react-icons/io'
import AddSkillsModal from '../../components/AddSkillsModal/AddSkillsModal'
import axios from "axios";

function Profile() {
  
  const [btns, setBtns] = useState("aboutMe");
  const navigate = useNavigate()
  const { setEditModal,
          editModal,setAddSkillsModal,addSkillsModal} = useCourses();
          const [user,setUser] = useState({});

          const getUser = async () => {
            const token = JSON.parse(localStorage.getItem('knoz-user')).token
            const id = JSON.parse(localStorage.getItem('knoz-user')).user.id
            const user2 = await axios.get('/account/get-current-user/' + id, {headers: {
              Authorization : token
            }})
            setUser(user2.data)
          }

          useEffect(() => {
           getUser()
           console.log(user);
          },[])

  return !addSkillsModal ? (
    <div className="profile-page-container">
      {editModal ? <Modal /> : null}
      <div className="profile-page-upper-side">
        <img src={user.avatar ? user.avatar : avatar} alt="" className="user-avatar" />
        <div className="user-info">
          <p className="user-name">{user.name}</p>
          <div className="student-info-email">
            <p className="user-type">student</p>
            <p className="user-email">{user.email}</p>
          </div>
        </div>
      </div>
      <div className="profile-page-bottom-side">
        <div className="user-porfile-btn">
          <button value="aboutMe" onClick={(e) => setBtns(e.target.value)}>
            About me
          </button>

          <button
            value="enrolledCourses"
            onClick={(e) => setBtns(e.target.value)}
          >
            Enrolled courses
          </button>
          <button className="edit-profile-btn" onClick={() => setEditModal(true)}>Edit Profile</button>
          <button
            onClick={() => {
              localStorage.clear();
              navigate('/')
            }}
          >
            Logout
          </button>
        </div>
        {btns === "aboutMe" ? (
          <div className="about-me-section">
            <div className="about-text-conatiner">
              <strong>About</strong>
              <p className="about-text">
                {user.about}
              </p>
            </div>
            <div className="skills-conatiner">
              <strong>Skills</strong>
              <div className="skills">
                {user.skills?.map((e,index) => {
                  return  <div className="skill" key={index}>
                  <p>{e}</p>
                </div>
                })}
               <div
                    className="add-skill-container"
                    onClick={() => setAddSkillsModal(true)}
                  >
                    <p>Add skill</p>
                    <IoIosAdd
                      size={25}
                      background="transparent"
                      className="add-skill"
                    />
                  </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="enrolled-courses-section">Enrolled Courses</div>
        )}
      </div>
    </div>
  ) : <AddSkillsModal />
}

export default Profile;
