import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { useState } from "react";
import { movieArray } from "./utils/data.js";

function App() {
  const [movieArrayState, setMovieArrayState] = useState(movieArray);
  const [filteredMovieArray, setFilteredMovieArray] = useState(movieArrayState);
  return (
    <>
      <Header movieArrayState={movieArrayState} setFilteredMovieArray={setFilteredMovieArray}/>
      <Main filteredMovieArray={filteredMovieArray} setMovieArrayState={setMovieArrayState} movieArrayState={movieArrayState}/>
    </>
  );
}
export default App;
