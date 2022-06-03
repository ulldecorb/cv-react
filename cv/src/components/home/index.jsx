import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './home.css';

function Home({ cv }) {
  return (
    <main className="home">
      <nav className="home__navbar">
        <div>{cv.header.name}</div>
        <div>{cv.header.office}</div>
        <Link to="/pdf">pdf</Link>
        <Link to="/formal">Formal</Link>
        <Link to="/animated">animated</Link>
      </nav>

      <section className="home__control-box">
        <article className="control-box__image">
          photo
        </article>
        <nav className="control-box__navbar-box">
          <div id="about-handler" className="control-box__navbar-title">ABOUT ME</div>
          <div id="skills-handler" className="control-box__navbar-title">SKILLS</div>
          <div id="work-handler" className="control-box__navbar-title">WORK EXPERIENCE</div>
          <div id="languages-handler" className="control-box__navbar-title">LANGUAGES</div>
          <div id="education-handler" className="control-box__navbar-title">EDUCATION</div>
        </nav>
      </section>

      <section className="home__profile-box">
        <article id="about" className="profile-box__article">{cv.aboutMe.description}</article>
        <article id="skills" className="profile-box__article">bla</article>
        <article id="work" className="profile-box__article">{cv.workExperience[0].article}</article>
        <article id="languages" className="profile-box__article">{cv.languages.catalan}</article>
        <article id="education" className="profile-box__article">{cv.education[0].article}</article>
      </section>

    </main>
  );
}

Home.propTypes = {
  cv: PropTypes.shape({
    header: PropTypes.objectOf(PropTypes.string).isRequired,
    personal: PropTypes.objectOf(PropTypes.string).isRequired,
    aboutMe: PropTypes.objectOf(PropTypes.string).isRequired,
    education: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    workExperience: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    languages: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
};

export default Home;
