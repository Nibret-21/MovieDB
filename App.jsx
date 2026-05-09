// import React from 'react'
// import Header from './Components/Header/Header'
// import Banner from './Components/Banner/Banner'
// import DisplayRow from './Components/DisplayRow/DisplayRow'
// import Footer from './Components/Footer/Footer'

// function App() {
//   return (
//     <div>
//       <Header/>
//       <Banner/>
//       <DisplayRow/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import DisplayRow from "./Components/DisplayRow/DisplayRow";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <DisplayRow />
            </>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;