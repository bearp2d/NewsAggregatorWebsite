import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <main id="welcome-page">
    <section id="header" className="gray-background">

      <header>
        <h1 className="title">Be in the know</h1>
        <span className="description">Keep up with all the topics that matter to you.
          <br/>All in one place.</span>
        <Link to="/signup" id="sign-up-button">
          GET STARTED FOR FREE
        </Link>
      </header>

      <div id="screenshot">
        <img src={window.screenshot} alt="Screenshot"/>
      </div>

    </section>

    <section id="feature-personalization" className="eggshell-background">

      <header>
        <span>The best of the web</span>
        <h2>Discover insightful sources</h2>
        //...
      </header>

    </section>

    <section id="feature-integration" className="gray-background">


    </section>

    <section id="feature-team" className="eggshell-background">


    </section>
  </main>
);

export default LandingPage;
