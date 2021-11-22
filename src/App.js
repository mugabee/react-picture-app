import react from "react";
import Header from "./component/Header";
import Loader from "./component/Loader";
import UnsplashImage from "./component/UnsplashImage";


function App() {
  return (
    <div>
      <Header />
      <Loader />
      <UnsplashImage />
    </div>
  );
}

export default App;
