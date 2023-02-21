import { Button, Card, CardActions, CardContent, Collapse, Rating, Skeleton, Typography, useTheme } from '@mui/material'
import React from 'react'


const Loader = () => {
  const theme = useTheme();
  return (
    <Card
    sx={{
      backgroundImage: "none",
      backgroundColor: theme.palette.background.alt,
      borderRadius: "0.55rem",
    }}
  >
    <CardContent>
    <Skeleton variant="text" width={70} height={20} />
    
    <Skeleton variant="text" width={100} height={30} />
    <Skeleton variant="text" sx={{mb:"1.5rem"}} width={60} height={20} />
      <Rating value="" readOnly />

      <Skeleton variant="text" width={200} height={20} />
    </CardContent>
    <CardActions>
    <Skeleton variant="text" width={60} height={30} />
    </CardActions>
  </Card>
  )
}

export default Loader