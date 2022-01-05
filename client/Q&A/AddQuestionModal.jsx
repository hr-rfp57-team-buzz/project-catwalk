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
      <label>What is your nickname?</label>
      <input maxLength='60' name="Nickname" id="nickname" required='required'placeholder='Example: jack543!' type='text'/>
      <h5>For privacy reasons, do not use yout full name or email address</h5>
      <label>Your email:</label>
          <input pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/'"
            name='Email' id='email' required='email' placeholder='Example: jack@email.com' type='text' maxLength='60'/>
          <h5>For authentication reasons, you will not be emailed</h5>
          <input type='submit'/>
    </form>
  </div>
)

export default AddQModal;