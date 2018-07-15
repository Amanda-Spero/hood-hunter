import React from "react";
import "./jumbotron.css";

const Jumbotron = () => (
<div id="index-banner" className="parallax-container">
<div className="section no-pad-bot">
  <div className="container">
    <br /><br /><br />
  
    <h1 className="heading center yellow-text text-darken-4"> 
      <p>Hood Hunter</p>
    {/*<img className="materialboxed" src="https://farm2.staticflickr.com/1802/29556286308_8128b7c6a1.jpg"  alt="logo"/>*/}
    </h1>
    <br /> 
    <div className="row center">
      <h4 className="header col s12 black-text transparent">Search your potential neighborhood below!</h4>
    </div>
    
    <br /><br />

  </div>
</div>
<div className="parallax">
{/* <img src="https://cdn.theeculturetrip.com/images/56-3940160-1441141742b47c175bf5824bf29f6cb0b91be2bd55.jpg" alt="city" /> */}
</div>

</div>
 
);

export default Jumbotron;

