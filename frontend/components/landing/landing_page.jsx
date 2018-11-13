import React from 'react';
import { Link } from 'react-router-dom';


//Im appending an underscore(_) to reserved JS words in the HTML in order to
//escape them

const LandingPage = () => (
  <div id="welcome-page">
    <header>
      <h1>Be in_ the know</h1>
      <span>Keep up with_ all the topics that matter to you.</span>
      <span>All in_ one place.</span>
      <Link to="/signup" className="sign-up-button">
        Get started for_ free
      </Link>
    </header>

    <div id="screenshot">
      //screenshot goes here
    </div>

    <div id="core-features">
      <header>
        <span>The best of_ the web</span>
        <h2>Discover insightful sources</h2>
        //...
      </header>
    </div>
  </div>
);

export default LandingPage;
