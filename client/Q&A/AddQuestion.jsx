import React, { useState } from 'react';
import AddQModal from './AddQuestionModal';

let AddQuestion = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? <AddQModal prodName={props.prodName}/> : null}
      <button onClick={() => { console.log('click'); setShow(!show); }} className='bottom-btn'>Add A Question +</button>
    </>
  )
}
export default AddQuestion;