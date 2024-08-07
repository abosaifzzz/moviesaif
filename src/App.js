import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Movies from "./Pages/Movies/movies";
import NotFound from "./Pages/NotFound/NotFound";
import MoviesDetails from "./Pages/MoviesDetailes/moviesDetailes";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Favourits from "./Pages/Favourits/Favourits";
import { LanguageProvider } from "./Redux/Context/LanguageContext";

function App() {
  // const [contextLang, setContextLang] = useState("EN");

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="container mt-5">
          <Switch>
            <Route path="/" component={Movies} exact />
            <Route path="/movies" component={Movies} exact />
            <Route path="/favourits" component={Favourits} exact />

            <Route path="/details/:id" component={MoviesDetails} exact />
            <Route path="/test" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="*" component={NotFound} exact />
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
