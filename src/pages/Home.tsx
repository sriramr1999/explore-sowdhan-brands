import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import banner from '../assets/banner.png';

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i:any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Stagger effect for each letter
      duration: 0.8,
      type: 'spring',
      stiffness: 150,
    },
  }),
};

const Home = () => (
  <Box
    sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
 backgroundImage: `url(https://i.ibb.co/zb3mfMP/banner.webp)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      color: '#fff',
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
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))',
        zIndex: 1,
      }}
    ></Box>

    {/* Content */}
    <Box
      sx={{
        zIndex: 2,
        padding: 3,
        textAlign: 'center',
        maxWidth: { xs: '90%', md: '800px' }, // Adjust width for smaller screens
      }}
    >
      {/* Animated Name */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem', // Reduced gap for mobile devices
        }}
      >
        {Array.from('SOWDHAN').map((char, index) => (
          <motion.div
            key={`sowdhan-${index}`}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterAnimation}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' }, // Adjust font size for devices
                letterSpacing: '0.2rem',
                textTransform: 'uppercase',
                display: 'inline-block',
                background: 'linear-gradient(to right, #6A0572, #FFD700)', // Royal purple to gold gradient
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {char}
            </Typography>
          </motion.div>
        ))}
      </Box>

      {/* Animated Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            marginBottom: 4,
            fontFamily: '"Roboto Mono", monospace',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            lineHeight: 1.8,
          }}
        >
          The visionary behind leading brands in cars, fashion, electronics, and more.
        </Typography>
      </motion.div>
    </Box>

    {/* Interactive Scroll Indicator */}
    <Box
      sx={{
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        zIndex: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Roboto Mono", monospace',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: { xs: '0.8rem', sm: '1rem' },
          }}
        >
          Scroll Down to Discover More ↓
        </Typography>
      </motion.div>
    </Box>
  </Box>
);

export default Home;