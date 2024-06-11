
import { useState } from 'react';
import './AddSkillsModal.css'
import { useCourses } from '../../context/CoursesContext';
import axios from 'axios';

function AddSkillsModal() {
    const {  setAddSkillsModal} = useCourses()

    const [addSkills , setAddSkills] = useState(null)
    const handleAddSkills = async (e) => {
        const data = { 
            skills:addSkills
        }
        const token = JSON.parse(localStorage.getItem('knoz-student-token')).token
        try {
            await axios.post('/account/profile/update-skills' , data , {headers : {
                Authorization : token
            }})
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="addSkills">

    <form className="add-siklls-modal" onSubmit={handleAddSkills}>
      <h1>Add your new skills</h1>
      <input type="text" placeholder="Add skills with space between each one" onChange={(e) => setAddSkills(e.target.value)}/>
      <button >Add skills </button>
      <button onClick={() => setAddSkillsModal(false)}>Close</button>
    </form>
    </div>
  );
}

export default AddSkillsModal