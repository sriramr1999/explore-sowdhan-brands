import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import { SvgIcon } from '@mui/material';


const CustomEcoIcon = () => (
    <SvgIcon>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 2.39 1.19 4.5 3 5.74V20h8v-5.26c1.81-1.24 3-3.35 3-5.74 0-3.87-3.13-7-7-7zm-1 15h2v2h-2v-2zm0-2h2v-2h-2v2z" />
    </SvgIcon>
);

const brands = [
  {
    name: 'Cars',
    tagline: 'Driving innovation with unmatched performance.',
    image: 'https://i.ibb.co/cyqcYVM/sowdhan-cars.webp',
    features: ['Electric & Hybrid Models', 'Luxury Interiors', 'Advanced Safety Systems'],
    achievements: [
      { label: 'Cars Sold', value: '5M+' },
      { label: 'Countries Available', value: '150+' },
      { label: 'Innovative Features', value: '300+' },
    ],
    differentiators: [
      { icon: <StarIcon />, title: 'Performance', description: 'Superior acceleration and handling.' },
      { icon: <VerifiedIcon />, title: 'Safety', description: 'Top-rated safety features.' },
      { icon: <CustomEcoIcon />, title: 'Eco-Friendly', description: 'Electric and hybrid options available.' },
    ],
    cta: 'Explore Cars',
  },
  {
    name: 'Clothing',
    tagline: 'Redefining fashion with sustainable fabrics.',
    image: 'https://i.ibb.co/rsK5xp7/sowdhan-cloth.webp',
    features: ['Sustainable Fabrics', 'Trendy Styles', 'Global Reach'],
    achievements: [
      { label: 'Eco-Friendly Products', value: '100%' },
      { label: 'Styles Released', value: '5K+' },
      { label: 'Global Stores', value: '300+' },
    ],
    differentiators: [
      { icon: <CustomEcoIcon />, title: 'Sustainable Fabrics', description: 'Environmentally friendly materials.' },
      { icon: <StarIcon />, title: 'Comfort & Style', description: 'Designed for daily elegance.' },
      { icon: <VerifiedIcon />, title: 'Global Trends', description: 'Inspired by global fashion leaders.' },
    ],
    cta: 'Explore Clothing',
  },
  {
    name: 'Watches',
    tagline: 'Timeless precision with unmatched craftsmanship.',
    image: 'https://i.ibb.co/FWsgL37/watches.webp',
    features: ['Luxury Design', 'Swiss Craftsmanship', 'Lifetime Warranty'],
    achievements: [
      { label: 'Years of Excellence', value: '25+' },
      { label: 'Watches Sold', value: '1M+' },
      { label: 'Countries Available', value: '100+' },
    ],
    differentiators: [
      { icon: <StarIcon />, title: 'Swiss Precision', description: 'Built with unmatched accuracy.' },
      { icon: <VerifiedIcon />, title: 'Lifetime Warranty', description: 'Guaranteed quality for life.' },
      { icon: <CustomEcoIcon />, title: 'Eco-Friendly', description: 'Sustainably crafted materials.' },
    ],
    cta: 'Explore Watches',
  },

  {
    name: 'Shoes',
    tagline: 'Step into comfort and style.',
    image: 'https://i.ibb.co/k5pGY1K/shoe.webp',
    features: ['Durable Materials', 'Ergonomic Design', 'Global Trends'],
    achievements: [
      { label: 'Pairs Sold', value: '10M+' },
      { label: 'Countries Served', value: '120+' },
      { label: 'Styles Released', value: '2K+' },
    ],
    differentiators: [
      { icon: <StarIcon />, title: 'Unmatched Comfort', description: 'Engineered for all-day wear.' },
      { icon: <VerifiedIcon />, title: 'Stylish Designs', description: 'Always on-trend.' },
      { icon: <CustomEcoIcon />, title: 'Sustainable Materials', description: 'Eco-conscious footwear.' },
    ],
    cta: 'Explore Shoes',
  },

];


const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Brands = () => (
  <Box>
    {brands.map((brand, index) => (
      <motion.section
        key={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          minHeight: '100vh',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${brand.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <Container maxWidth="md">
          {/* Brand Title and Tagline */}
          <motion.div variants={cardAnimation}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                marginBottom: '10px',
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              {brand.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: '20px',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                maxWidth: '100%',
              }}
            >
              {brand.tagline}
            </Typography>
          </motion.div>

          {/* Achievements Section */}
          <Grid
            container
            spacing={3}
            sx={{
              marginTop: '20px',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {brand.achievements.map((achievement, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: { xs: '1.2rem', sm: '1.5rem' },
                  }}
                >
                  {achievement.value}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                  }}
                >
                  {achievement.label}
                </Typography>
              </Grid>
            ))}
          </Grid>

          {/* Add Space Between Achievements and Differentiators */}
          <Box sx={{ marginTop: { xs: '30px', sm: '50px', md: '70px' } }} />

          {/* Differentiators Section */}
          <Grid
            container
            spacing={{ xs: 2, sm: 4, md: 6 }} // Adjust gap based on screen size
            sx={{
              justifyContent: { xs: 'center', sm: 'space-between' },
              textAlign: 'center',
            }}
          >
            {brand.differentiators.map((diff, i) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={3} // Make each item wider on larger screens
                key={i}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    padding: 3,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.15)',
                    transition: 'transform 0.3s',
                    width: '100%', // Full width for grid item
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  {diff.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      marginTop: 2,
                      fontSize: { xs: '1rem', sm: '1.2rem' },
                    }}
                  >
                    {diff.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: 1,
                      fontSize: { xs: '0.75rem', sm: '1rem' },
                    }}
                  >
                    {diff.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              borderColor: '#fff',
              color: '#fff',
              marginTop: '40px',
              padding: { xs: '8px 12px', sm: '10px 20px' },
              fontSize: { xs: '14px', sm: '16px' },
              '&:hover': {
                backgroundColor: '#fff',
                color: '#000',
              },
            }}
          >
            {brand.cta}
          </Button>
        </Container>
      </motion.section>
    ))}
  </Box>
);

export default Brands;