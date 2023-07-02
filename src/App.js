import './App.css';
import axios from 'axios';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom"
import CatDog from './Components/CatDog';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export var BASE_URL = "http://127.0.0.1:8000"
export var MIN_IO_DASHBOARD = "http://127.0.0.1:9000"
export var ADMIN_PANEL = "http://127.0.0.1:8000/admin/"

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/cat_dog_images" Component={CatDog} />
      </Routes>
    </>
  )
}

export default App;
