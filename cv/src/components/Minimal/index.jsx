import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './minimal.css';

function Minimal({ cv }) {
  const showProfile = (e) => {
    const articles = document.getElementById('profile').children;
    for (let i = 0; i < articles.length; i += 1) {
      articles[i].style.display = 'none';
    }
    const id = e.target.id.split('-')[0];
    const node = document.getElementById(id);
    node.style.display = 'flex';
  };

  const hideProfiles = (e) => {
    const { id } = e.target;
    const box = document.getElementById(id);
    box.style.display = 'none';
  };
  return (
    <main>

      <section className="minimal__control-box">
        <nav className="minimal-control-box__navbar-box">
          <div id="about-handler" className="minimal-control-box__navbar-title" onMouseEnter={(e) => showProfile(e)}>AUSIAS BERTRAN</div>
          <div id="skills-handler" className="minimal-control-box__navbar-title" onMouseEnter={(e) => showProfile(e)}>SKILLS</div>
          <div id="work-handler" className="minimal-control-box__navbar-title" onMouseEnter={(e) => showProfile(e)}>WORK EXPERIENCE</div>
          <div id="languages-handler" className="minimal-control-box__navbar-title" onMouseEnter={(e) => showProfile(e)}>LANGUAGES</div>
          <div id="education-handler" className="minimal-control-box__navbar-title" onMouseEnter={(e) => showProfile(e)}>EDUCATION</div>
        </nav>
      </section>
      <section id="profile" className="minimal__profile-box" onMouseLeave={(e) => hideProfiles(e)}>
        <article id="about" className="profile-box__article">{cv.aboutMe.description}</article>
        <article id="skills" className="profile-box__article">bla</article>
        <article id="work" className="profile-box__article">{cv.workExperience[0].article}</article>
        <article id="languages" className="profile-box__article profile-box__languages">
          {cv.languages.map((language) => (
            <Fragment key={`minimal${language.language}`}>
              <h3>
                {language.language}
                {': '}
                {language.level}
              </h3>
              <br />
            </Fragment>
          ))}
        </article>
        <article id="education" className="profile-box__article">{cv.education[0].article}</article>
      </section>
    </main>
  );
}

Minimal.propTypes = {
  cv: PropTypes.shape({
    header: PropTypes.objectOf(PropTypes.string).isRequired,
    personal: PropTypes.objectOf(PropTypes.string).isRequired,
    aboutMe: PropTypes.objectOf(PropTypes.string).isRequired,
    education: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    workExperience: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    languages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
  }).isRequired
};

export default Minimal;
