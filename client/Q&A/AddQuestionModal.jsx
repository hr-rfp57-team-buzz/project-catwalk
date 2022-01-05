import React from 'react';

let AddQModal = (props) => (
  <div>
    <form>
      <h1>Ask Your Question</h1>
      <h3>About the {props.prodName}</h3>
      <label>Your Question: </label>
      <textarea name="question" id="id" required='required'
            minLength='10' maxLength='1000'
            rows="10" cols='100'>
          </textarea>
    </form>
  </div>
)

export default AddQModal;