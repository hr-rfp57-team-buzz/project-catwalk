import React, { useState } from 'react';
import AddQModal from './AddQuestionModal';

let AddQuestion = (props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(false);
  }

  return (
    <>
      <button onClick={(e) => { console.log('click'); setShow(!show); }} className='bottom-btn'>Add A Question +</button>
      {show ? <AddQModal prodId={props.prodId} prodName={props.prodName}/> : null}
    </>
  )
}
export default AddQuestion;