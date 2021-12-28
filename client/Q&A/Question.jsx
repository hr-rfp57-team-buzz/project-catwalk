import React from 'react';

let Question = () => {
  return (
    <div className="questions">
      <div className="q-line">
        <h4>Q: Who what which when where why whether how?</h4>
        {/* <span className="top-links"> */}
        <span className="top-links">
          <p className="top-line helpful">Helpful?</p>
          <a className="top-line helpful">Yes(25)</a>
          <div id="line"></div>
          <a className="top-line">Add Answer</a>
        </span>
        {/* </span> */}
      </div>
      <div className="a-line">
        <h4>A:</h4>
        <p>Icing macaron bear claw jelly beans chocolate cake. Cookie oat cake chocolate halvah jelly cake cotton candy souuflé topping. Jujubes topping cake gummies lemon drops.</p>
      </div>
      <div className="bottom-line">
        <h6>By User1234, January 1, 2019</h6>
        <div id="line"></div>
        <p className="bottom-links helpful">Helpful?</p>
        <a className="bottom-links helpful">Yes(2)</a>
        <div id="line"></div>
        <a className="bottom-links">Report</a>
      </div>
    </div>
  )
};

export default Question;