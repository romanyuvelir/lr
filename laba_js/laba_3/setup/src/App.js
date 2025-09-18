import React from "react"; "7.6k (gzipped: 3k)"
import Review from "./Review";
function App(){
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review></Review>
      </section>
    </main>
  );
}
export default App