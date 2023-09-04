import React from 'react'
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

import founderImage from "../asserts/images/aboutImage-2.jpg";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
 }));

 const OverlappingCardContent = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  top: '115%',
  left: '65%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: theme.spacing(2),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
}));

export default function About() {
  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h6" align="center" gutterBottom style={{fontFamily:"Pacifico", fontStyle:"italic"}}>
      Welcome to Infinite Jewelry, where timeless elegance and everlasting beauty come together. We are dedicated to crafting extraordinary jewelry that captures the essence of infinite possibilities and celebrates the unique stories of those who wear our pieces.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <StyledCard >
            <img src={founderImage} alt="Image" style={{ maxWidth: '100%', height: 'auto' }} />
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} className="cardContent">
        <StyledCard>
            <OverlappingCardContent style={{ fontFamily: 'Dancing Script', fontStyle: "italic" }}>
              Infinite Jewelry was born out of a passion for creating jewelry that transcends boundaries and resonates with the eternal spirit. Our founder, <span style={{ fontWeight: "bolder" }}>Linda</span>, embarked on a remarkable journey to merge artistry, innovation, and a deep appreciation for the profound meaning that jewelry holds in our lives.
            </OverlappingCardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
