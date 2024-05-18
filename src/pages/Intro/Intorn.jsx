import './intor.css'
import logo from '../../assets/logo.png'
import landing from '../../assets/landing.jpg'
import { Link } from 'react-router-dom'
function Intorn() {
  return (
    <div className="intro-container">
      <header className="header">
        <div className="left-side">
          <img src={logo} alt="" className="logo" />
          <ul className="links">
            <li className="link">
              <Link>Home</Link>
            </li>
            <li className="link">
              <Link>Courses</Link>
            </li>
            <li className="link">
              <Link>Kids courses</Link>
            </li>
            <li className="link">
              <Link>Contact us</Link>
            </li>
            <li className="link">
              <Link>Language</Link>
            </li>
          </ul>
        </div>
        <button className="login-btn">Login</button>
      </header>
      <section>
        <div className="section-left-side">
          <h1>Knoz Academy</h1>
          <h2>Education is create better future</h2>
          <p>
            we believe in the importance of nurturing a conscious and educated
            generation equipped with the necessary skills to face lifes various
            challenges
          </p>
          <p>
            Building the skills and awareness needed for a better future for
            your little ones starts here
          </p>
        </div>
        <div className="section-right-side">
          <img src={landing} />
        </div>
      </section>
    </div>
  );
}

export default Intorn