import React from 'react';
import './App.css';
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"



function App() {
   return (
  <>
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} alt="First slide" style={{height:"400px",width:"100%",alignItems:'center',display:'flex'}}/>
    </div>
    <div className="carousel-item">
      <img src={img2}  alt="Second slide" style={{height:"400px",width:"100%",alignItems:'center',display:'flex'}}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</>
  );
}

export default App;