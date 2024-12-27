import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("https://images.unsplash.com/photo-1515169067865-5387ec356754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))',
          zIndex: 1,
        }}
      ></Box>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.7)',
          maxWidth: '600px',
          width: '90%', // Ensures responsiveness
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 3,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          Contact Us
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: 4,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
          }}
        >
          Have questions or need help? We’d love to hear from you!
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            sx={{
              input: { color: '#fff' },
              label: { color: '#aaa' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#555' },
                '&:hover fieldset': { borderColor: '#fff' },
              },
            }}
          />
          <TextField
            name="email"
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            sx={{
              input: { color: '#fff' },
              label: { color: '#aaa' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#555' },
                '&:hover fieldset': { borderColor: '#fff' },
              },
            }}
          />
          <TextField
            name="message"
            label="Your Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            sx={{
              textarea: { color: '#fff' },
              label: { color: '#aaa' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#555' },
                '&:hover fieldset': { borderColor: '#fff' },
              },
            }}
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: '20px' }}
          >
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                padding: '12px 30px',
                fontWeight: 'bold',
                fontSize: { xs: '14px', sm: '16px' },
                background: 'linear-gradient(90deg, #4caf50, #81c784)', // Updated green gradient
                color: '#fff',
                borderRadius: '25px',
                boxShadow: '0 8px 20px rgba(76, 175, 80, 0.7)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #388e3c, #66bb6a)',
                },
              }}
            >
              Send Message
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </Box>
  );
};

export default Contact;