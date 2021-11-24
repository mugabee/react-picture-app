import React, { useState, useEffect, useContext } from "react";
import Header from "./component/Header";
import Loader from "./component/Loader";
import UnsplashImage from "./component/UnsplashImage";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { imagecontext } from "./context/contex";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Description from "./component/Description";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const App = () => {
  const { image, setImages, searchPhotos } = useContext(imagecontext);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 50) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImages([...image, ...res.data]);
      });
  };

  return (
    <BrowserRouter>
      <div className="bg-gray-700">
        <Routes>
          <Route
            path="/Description/:id"
            element={<Description />}
            exact
          ></Route>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header />
                <GlobalStyle />
                <InfiniteScroll
                  dataLength={image.length}
                  next={fetchImages}
                  hasMore={true}
                  loader={<Loader />}
                >
                  <WrapperImages className=" ">
                    {image.map((image) => (
                      <UnsplashImage image={image} />
                    ))}
                  </WrapperImages>
                </InfiniteScroll>
              </>
            }
            exact
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
