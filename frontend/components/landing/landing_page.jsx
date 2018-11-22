import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../main/navbar';

const LandingPage = ({ openModal, createDemoUser }) => (
  <>
    <NavBar />
    <section id="header" className="gray-background">

      <header>
        <h1 className="title">BE IN THE KNOW</h1>
        <span className="description">Keep up with all the topics that matter to you.
          <br/>All in one place.
        </span>
        <div id="entry-buttons">
          <button id="signup-button" onClick={() => openModal('signup')}>
            GET STARTED FOR FREE
          </button>
          <button id="demo-button" onClick={() => createDemoUser()}>
            DEMO WEBSITE WITHOUT CREATING ACCOUNT
          </button>
        </div>
      </header>

      <div id="screenshot">
        <img src={window.screenshot} alt="Screenshot"/>
      </div>

    </section>

    <section id="feature-personalization" className="eggshell-background">

      <header>
        <span className="description">The best of the web</span>
        <h2 className="title">Discover insightful sources</h2>
      </header>

      <div className="grid">
        <div id="block-1">
          <img/>
          <h3 className="title">Publications</h3>
          <p className="description">
            Don't miss a beat from New York Times or any other
            industry journal you trust
          </p>
        </div>

        <div id="block-2">
          <img/>
          <h3 className="title">Blogs</h3>
          <p className="description">
            Dive deeper by following
            blogs from the latest movers, shakers, and thinkers
          </p>
        </div>

        <div id="block-3">
          <img/>
          <h3 className="title">Youtube Channels</h3>
          <p className="description">
            See new videos from the YouTube channels you follow
          </p>
        </div>

        <div id="block-4">
          <img/>
          <h3 className="title">Keyword Alerts</h3>
          <p className="description">
            Monitor news about your company, your product, your craft,
            and your competitors
          </p>
        </div>

        <div id="block-5">
          <img/>
          <h3 className="title">Tweets</h3>
          <p className="description">
            Follow your favorite twitter influencer or hashtag and
            never miss crucial updates
          </p>
        </div>

        <div id="block-6">
          <img/>
          <h3 className="title">RSS Feeds</h3>
          <p className="description">
            Follow anyone on the Web who publishes an RSS feed
          </p>
        </div>
      </div>

    </section>


    <section id="feature-integration" className="gray-background">

      <header>
        <span className="description">Cut the noise</span>
        <h2 className="title">Never miss important stories</h2>
      </header>

      <div className="grid">
        <div id="block-1">
          <img/>
          <h3 className="title">Organize</h3>
          <p className="description">
            Let the web work for you by arranging the content you rely
            on into easy-to-read feeds
          </p>
        </div>

        <div id="block-2">
          <img/>
          <h3 className="title">Read</h3>
          <p className="description">
            Feedly offers a clean, minimalist reading experience optimized
            for productivity
          </p>
        </div>

        <div id="block-3">
          <img/>
          <h3 className="title">Search</h3>
          <p className="description">
            Delve into the specific articles that interest you within your
            Feedly or within a specific publication
          </p>
        </div>

        <div id="block-4">
          <img/>
          <h3 className="title">Read Later</h3>
          <p className="description">
            Save articles and easily get back to them. Tag with Feedly or
            use favorite web services like Evernote, Pocket, and Instapaper
          </p>
        </div>

        <div id="block-5">
          <img/>
          <h3 className="title">Share</h3>
          <p className="description">
            Easily share articles to Facebook, Twitter, LinkedIn, Pinterest,
            email, and more. Schedule posts with Hootsuite or Buffer
          </p>
        </div>

        <div id="block-6">
          <img/>
          <h3 className="title">Discover</h3>
          <p className="description">
            Discover fresh, authoritative voices on niche and broad topics
            alike. Channel the mainstream or pull from the diamonds in the rough
          </p>
        </div>
      </div>

    </section>


    <section id="feature-team" className="eggshell-background">


    </section>
  </>
);

export default LandingPage;
