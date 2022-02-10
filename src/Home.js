import React from "react";
// import FirstComponent from "./Components/FirstComponent";

import { lazy, Suspense } from "react";
const FirstComponent = lazy(() => import("./Components/FirstComponent"));

function Home() {
  return (
    <div>
      {/* <Suspense fallback={<div>Loading ...</div>}> */}
      <h1>This is another component</h1>
      <div className="home">
        {/*! Only Lazy Loading the First Component Only */}
        <Suspense fallback={<div>Loading Screen ...</div>}>
          <FirstComponent />
        </Suspense>
      </div>
      {/* </Suspense> */}
    </div>
  );
}

export default Home;
