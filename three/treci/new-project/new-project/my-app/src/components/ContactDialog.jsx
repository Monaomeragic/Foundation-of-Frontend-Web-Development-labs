import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@material-ui/core';

function ContactDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    // Submit form data
    console.log('Form submitted:', formData);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Contact Me
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Form</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              name="message"
              label="Message"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ContactDialog;
