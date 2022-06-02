import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <main className="home">
      <navbar className="home__navbar">
        <div>Home</div>
        <Link to="/pdf">pdf</Link>
        <Link to="/formal">Formal</Link>
        <Link to="/animated">animated</Link>
      </navbar>
      <section className="home__profile-box">
        <article className="profile-box__image">
          photo
        </article>
        <article className="profile-box__about">
          jelou
        </article>
        <article className="profile-box__about" />
        <article className="profile-box__languages" />
        <article className="profile-box__work" />
        <article className="profile-box__studies" />
        <article className="profile-box__skills" />

      </section>
    </main>
  );
}

export default Home;
