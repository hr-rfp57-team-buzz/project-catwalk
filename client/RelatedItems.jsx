import React, {useState} from 'react';


var Related = () => {
  const [x, setX] = useState(50);
  const styles = {
    transformRelated: `translate(${x}px, 0px)`
  };
  return (
    <div>
      <div className="reel"style={styles}onClick={()=>setX(x + 50)}>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      <div className="reel"style={styles}onClick={()=>setX(x + 50)}>
        <Cards/>
      </div>
    </div>
  );
};

var Cards = () => {


  return (
    <div className="Card" >
      <div className="relatedPicHolder">
        <img className="relatedPic" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"></img>
      </div>
      <div className="relatedTextHolder">
        <h3>Jacket</h3>
        <h4>Sportswear</h4>
        <h4>$29.99</h4>
      </div>
    </div>
  );
};

export default Related;