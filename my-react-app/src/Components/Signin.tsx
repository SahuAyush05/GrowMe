// src/Form.tsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && phoneNumber && email) {
      // Do something with the form data (e.g., submit to server)
      setSubmitted(true);
    } else {
      // Display an error message or handle validation
      alert('Please enter all details before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box>
        <TextField
          label="Phone Number"
          variant="outlined"
          margin="normal"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Box>
      <Box>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
      {submitted && (
        <div>
          <p>Form submitted successfully!</p>
          <Link to="/second-page">Go to Second Page</Link>
        </div>
      )}
    </form>
  );
};

export default Form;
