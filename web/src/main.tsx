import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet';
import {Router} from '@utilities';
import './App.css';


ReactDOM.render(
  <React.Fragment>
    <Helmet>

    </Helmet>
    <Router/>
  </React.Fragment>,
  document.getElementById('root')
)
