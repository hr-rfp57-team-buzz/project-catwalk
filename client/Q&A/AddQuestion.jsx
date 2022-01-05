import React, { useState } from 'react';
import AddQModal from './AddQuestionModal';

let AddQuestion = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? 'Hello' : 'Bye'}
      <button className='bottom-btn'>Add A Question +</button>
      <AddQModal prodName={props.prodName}/>
    </>
  )
}
export default AddQuestion;