import "./coursePage.css";
import img from "../../assets/medium-shot-man-reading-home_23-2149879774.jpg";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../../context/CoursesContext";
import { useEffect } from "react";
import AddCourseVideoModal from '../../components/AddCourseVideoModal/AddCourseVideoModal'

function Course() {

  const navigate = useNavigate()
    const {  courseVideos,getCourseVideos, filterVideos ,openAddVideoModal,setOpenAddVideoModal } =
      useCourses();

      const selectedCourse = JSON.parse(sessionStorage.getItem('selectedCourse'))

      useEffect(() => {
        getCourseVideos(selectedCourse._id)
      },[])


      const handleVideoClicking = (id) => {
        filterVideos(id)
        navigate(`/courses/${selectedCourse._id}/videos`);
      }
  return !openAddVideoModal ? (
    <div className="course-page-container">
      <div className="course-page-upper-section">
        <div className="left-side">
          <img
            src={selectedCourse.course_img ? selectedCourse.course_img : img}
            alt=""
            className="course-img"
          />
        </div>
        <div className="right-side">
          <button className="open-add-video" onClick={() => setOpenAddVideoModal(true)}>Add video</button>
          <strong>About the course</strong>
          <p>{selectedCourse.course_description}</p>
        </div>
      </div>
      <div className="p">
        <p>Course Videos :</p>
        {!selectedCourse.isEnrolled ? <p className="not-enrolled">You must enroll this course to see all videos</p> : null }
      </div>
      <div className="course-page-bottom-section">
        {selectedCourse.isEnrolled ? (
          courseVideos.length !== 0 ? (
            courseVideos.map((ele, idx) => {
              return (
                <div
                key={idx}
                  className="video-container"
                  onClick={() => handleVideoClicking(ele._id)}
                >
                  <p className="video-number">{idx + 1}</p>
                  <div className="video-details">
                    <strong>{ele.video_title}</strong>
                    <p>
                      {ele.description.length >= 50
                        ? ele.description.slice(0, 85) + "..."
                        : ele.description}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-videos-text">
              <p>There is no videos here yet </p>
            </div>
          )
        ) : courseVideos.length != 0 ? (
          <div className="video-container">
            <video
              src={courseVideos[0]?.video_uri}
              className="video"
              controls
              controlsList="nodownload"
            />
            <div className="video-details">
              <strong>{courseVideos[0]?.video_title}</strong>
              <p>
                {courseVideos[0]?.description.length > 50
                  ? courseVideos[0]?.description.slice(
                      50,
                      courseVideos[0]?.description.length - 1
                    ) + "..."
                  : courseVideos[0]?.description}
              </p>
            </div>
          </div>
        ) : (
          <h2>no videos yet</h2>
        )}
      </div>
    </div>
  ) : <AddCourseVideoModal id={selectedCourse._id}/>
}

export default Course;
