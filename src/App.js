import React, { useState, useEffect } from 'react';
import Header from "./component/Header";
import Loader from "./component/Loader";
import UnsplashImage from "./component/UnsplashImage";
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
  // const [images, setImage] = useState([]);
  // ;
  useEffect(() => {
    const getApi = "https://api.unsplash.com";
    const getAccessKey = process.env.REACT_APP_ACCESSKEY

    axios
    .get(`${getApi}/photos/random?client_id=${getAccessKey}&count=10`)
    .then(res => console.log(res.data));
    })

  return (
    <div>
      <Header />
      <Loader />
      <UnsplashImage />
    </div>
  );
}
import InfiniteScroll from 'react-infinite-scroll-component';

export default App;
