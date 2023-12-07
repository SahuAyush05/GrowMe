// UserForm.tsx

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
interface FormErrors {
  username: string;
  phoneNumber: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    username: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the corresponding error when the user starts typing in a field
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate the form fields
    const validationErrors: FormErrors = {
      username: "",
      phoneNumber: "",
      email: "",
    };
    Object.keys(formData).forEach((key) => {
      const formKey = key as keyof FormErrors; // assert the key type
      if (!formData[formKey]) {
        validationErrors[formKey] = `${
          formKey.charAt(0).toUpperCase() + formKey.slice(1)
        } is required`;
      }
      else{
        navigate('/second-page', { replace: true });
      }
    });

    if (Object.values(validationErrors).some((error) => error !== "")) {
      // Display validation errors
      setErrors(validationErrors);
    } else {
      // No validation errors, proceed to store data in local storage
      localStorage.setItem("userData", JSON.stringify(formData));
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit} style={{ backgroundColor:"#fff", padding: '20px' }}>
        <TextField
          label="Username"
          name="username"
          
          value={formData.username}
          onChange={handleChange}
          margin="normal"
          style={{ marginBottom: '20px' ,}}
          fullWidth
          required
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          margin="normal"
          style={{ marginBottom: '20px' }}
          fullWidth
          required
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          style={{ marginBottom: '20px' }}
          fullWidth
          required
          error={!!errors.email}
          helperText={errors.email}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ width: "30%", margin: "auto 35%" , backgroundColor: '#113946'  }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
