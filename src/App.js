import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./Componenets/movies";
import Customers from "./Componenets/customers";
import Rental from "./Componenets/rental";
import NotFound from "./Componenets/not-found";
import NavBar from "./Componenets/Navbar";
import MovieForm from "./Componenets/movie-form";
import RegisterForm from "./Componenets/registerForm";
import LoginFrom from "./Componenets/loginFrom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginFrom} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rental" component={Rental} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/movies" exact />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
