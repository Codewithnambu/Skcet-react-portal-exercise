import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
  };

  return (
    <div>
      <label>Name</label>
      <input
        type='text'
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <label>Email</label>
      <input
        type='email'
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <label>
        Message
        <textarea
          rows={2}
          cols={30}
          value={message}
          onChange={handleMessageChange}
        />
      </label>
      <br />
      <button type='button' onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
