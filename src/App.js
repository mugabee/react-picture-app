import React, { useState, useEffect } from 'react';
import Header from "./component/Header";
import Loader from "./component/Loader";
import UnsplashImage from "./component/UnsplashImage";
import axios from 'axios';


function App() {
  const [images, setImage] = useState([]);
  const accessKey = process.env.REACT_APP_ACCESSKEY;
  useEffect(() => {
    const getApi = "https://api.unsplash.com";

    axios
    .get(`${getApi}/photos/random?client_id=${accessKey}&count=${count}`)
  return (
    <div>
      <Header />
      <Loader />
      <UnsplashImage />
    </div>
  );
}

export default App;
