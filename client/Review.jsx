import React from 'react';

let Review = () => (


  <div className="review">

    <h2>NUM reviews, sorted by <u>CONDITION</u></h2>
    <div className="gridContainer2Col">
      <div className="gridItemLeft">
        <h3>* * * * *</h3>
      </div>
      <div className="gridItemRight">
        <sub>SOMEUSERNAME</sub>
      </div>
    </div>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
    <p>ucibus. Aliquam at ultricies sem. Sed iaculis eros tempus tortor semper vestibulum. Integer interdum egestas sapien quis facilisis. Suspendisse velit tortor, posuere a scelerisque quis, porttitor ut leo. Vestibulum ac neque quis justo imperdiet venenatis. Maecenas ante lorem, gravida ac feugiat quis, lacin</p>
    <div class="responseFromSeller"></div>
    <br/>
    <p>Was this review helpful?</p>
    <sub><a href="#">YES</a>  <a href="#">NO</a></sub>
    <br/><br/>
    <hr/>
    <br/><br/>

    <h2>NUM reviews, sorted by <u>CONDITION</u></h2>
    <div className="gridContainer2Col">
      <div className="gridItemLeft">
        <h3>* * * * *</h3>
      </div>
      <div className="gridItemRight">
        <sub>SOMEUSERNAME</sub>
      </div>
    </div>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
    <p>ucibus. Aliquam at ultricies sem. Sed iaculis eros tempus tortor semper vestibulum. Integer interdum egestas sapien quis facilisis. Suspendisse velit tortor, posuere a scelerisque quis, porttitor ut leo. Vestibulum ac neque quis justo imperdiet venenatis. Maecenas ante lorem, gravida ac feugiat quis, lacin</p>
    <div class="responseFromSeller">
      <h4 className="pad15">Response from seller:</h4>
      <p className="pad15">re ultrices diam tincidunt at. Maecenas sit amet iaculis odio, a viverra felis. Aliquam sit amet</p>
    </div>
    <br/>
    <p>Was this review helpful?</p>
    <sub><a href="#">YES</a>  <a href="#">NO</a></sub>
    <br/><br/>
    <hr/>
    <br/><br/>

    <div className="gridContainer1Col">
      <div className="gridItemCenter"><button>MORE REVIEWS</button></div>
    </div>
    <br/><br/>

  </div>

);


export default Review;