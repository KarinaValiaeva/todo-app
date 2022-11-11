import { Route } from "react-router-dom";
// import axios from 'axios';
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//import TodoList from "../Mainnn/Mainnn";
// import { getTodos } from "../../utils/TodoApi";
import "./App.css";
// import { useEffect, useState } from "react";

function App() {
 
  return (
    <div className="App">
      <Header />
      {/* <NavBar />
      <Route exact path="/"> */}
        <Main />
      {/* </Route>
      <Route path="/todoList">
        <TodoList />
      </Route> */}
      <Footer />
    </div>
  );
}

export default App;
