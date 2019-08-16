import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

const App = () => (
  <div class='container'>
    <Router>
      <Navbar />
      <br/>
      <Route exact path='/' component={ExercisesList} />
      <Route exact path='/edit/:id' component={EditExercise} />
      <Route exact path='/create' component={CreateExercise} />
      <Route exact path='/user' component={CreateUser} />
    </Router>
  </div>
);

export default App;
