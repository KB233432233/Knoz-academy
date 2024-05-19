import './intor.css'
import logo from '../../assets/logo.png'
import landing from '../../assets/landing.jpg'
import { Link } from 'react-router-dom'
import { useEffect , useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoIosMenu } from 'react-icons/io'

function Intorn() {
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
      setWindowSize(window.screen.width);
      console.log(windowSize);
    });

   function closeMenu () {
        document.querySelector(".mob-screen-links").style.display = 'none'
        document.querySelector(".mob-screen-links").style.transition = '0.3s';
   } 
   function openMenu() {
     document.querySelector(".mob-screen-links").style.display = "flex";
   } 

  return (
    <div className="intro-container">
      {windowSize > 670 ? (
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
      ) : (
        <header className="mob-screen">
          <img src={logo} alt="" className="logo" />
          <ul className="mob-screen-links">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Courses</Link>
            </li>
            <li>
              <Link>Kids courses</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
            <li>
              <Link>Language</Link>
            </li>
            <button className="login-btn">Login</button>
            <button className="close-mob-menu" onClick={closeMenu}>
              <IoMdClose size={18} color="gray" />
            </button>
          </ul>
          <button onClick={openMenu} className="open-menu">
            <IoIosMenu size={30} color="gray" />
          </button>
        </header>
      )}
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