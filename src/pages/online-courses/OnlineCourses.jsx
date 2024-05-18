import './onlineCourses.css'
import teacher from '../../assets/pexels-photo-774909.jpeg'

function OnlineCourses() {
  return (
    <div className="OnlineCourses-section">
      <div className="left-side">
        <h1>
          The best way to learn <br /> online courses
        </h1>
        <p>
          in this world engage, challenge and support in off <br /> for quizzes
          that students love to participate in
        </p>
        <button className="get-started-btn">Get started</button>
      </div>
      <div className="right-side">
        <img src={teacher} alt="" />
        </div>
    </div>
  );
}

export default OnlineCourses