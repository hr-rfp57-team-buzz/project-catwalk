import React, { useState } from 'react';
import axios from 'axios';

 let AddQModal = (props) => {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const collectInfo = (e) => {
    e.preventDefault();
    axios.post('/qa/questions', {
      body: body,
      name: name,
      email: email,
      product_id: props.prodId
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err)
    });
  }
  return (
    <div className='modal'>
      <div className='answerModal'>
        <form>
          <h1>Ask Your Question</h1>
          <h3>About the {props.prodName}</h3>
          <label>Your Question: </label>
          <textarea name="question" id="body" required='required'
                minLength='10' maxLength='1000'
                rows="10" cols='100' onChange={(e) => { setBody(e.target.value)}} >
          </textarea>
          <label>What is your nickname?</label>
          <input maxLength='60' name="Nickname" id="nickname" required='required'placeholder='Example: jack543!' type='text' onChange={(e) => { setName(e.target.value)}}/>
          <h5>For privacy reasons, do not use yout full name or email address</h5>
          <label>Your email:</label>
              <input name='Email' id='email' required='email' placeholder='Example: jack@email.com' type='email' maxLength='60' onChange={(e) => { setEmail(e.target.value)}}/>
              <h5>For authentication reasons, you will not be emailed</h5>
              <input onClick={(e) => { collectInfo(e); }} type='submit'/>
        </form>
      </div>
    </div>
  )
}
export default AddQModal;