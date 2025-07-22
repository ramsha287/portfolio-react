import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Header.css';
import profileImg from '../../../Assets/profile-img.jpeg';


const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let profileImg = document.querySelector('.profile-img');

            if (profileImg) {
                profileImg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='header-container'>
            <div className='image-container'>
                <div className='profile-img-container'>
                    <img src={profileImg} alt="profile-img" className='profile-img' />
                </div>
            </div>
            <div className='header-content'>
                <h1 className='fullname'>Ramsha Arshad</h1>
                <h2>I'm a {" "}
                    <TypeAnimation
                        sequence={[
                            'MERN Stack Developer', 1000,
                            'Frontend Developer', 1000,
                            'Backend Developer', 1000,
                            'AI/ML Enthusiast', 1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        wrapper="span"
                    />
                </h2>
                <p>From Frontend Aesthetics to Backend Logic, to AI-Powered Intelligence – I Build, Optimize, and Innovate.</p>
                <div className='social-icons'>
                    <a href="https://drive.google.com/file/d/1Q9Lpnc7jNQgMCgs2OSbfSnfmJNnLJ3tf/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button>Resume</button>
                    </a>
                    <a href="https://github.com/ramsha287" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ramsha-arshad-559116249/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:arshadramsha04@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://www.instagram.com/_a.v.i.o.t.h.i.c._/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Header;
