import React, {useState} from 'react';


var Related = () => {

  return (
    <div>
      <Cards/>
      <Cards/>
    </div>
  );
};

var Cards = () => {
  const [x, setX] = useState(50);
  const styles = {
    transform: `translate(${x}px, 0px)`
  };

  return (
    <div className="Card" style={styles}onClick={()=>setX(x + 50)}>
      Hello
    </div>
  );
};

export default Related;