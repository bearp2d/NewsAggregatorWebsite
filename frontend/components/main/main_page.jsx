import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import NavBar from './navbar';
import SideBar from './sidebar/sidebar_container';

const MainPage = () => (
  <>
    <SideBar />
    <div id="main">
      <NavBar />
      <span>Main Page</span>
    </div>
  </>
);

export default MainPage;
