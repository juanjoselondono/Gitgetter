import React from 'react'
import { Grid,Link} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const footer = (props) => {
  const{
     location,
     website,
     company, 
     twitter, 
  } = props;

  return (
    <Grid item 
    xs = {12}
    sx={{
      textAlign:'center',
      alignSelf:'center',
      justifyContent:'center',
      marginTop:'5vh'
    }}
    >
        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
                <LocationOnIcon sx={{
                    justifySelf:'center'
                }}></LocationOnIcon>
                <p>{location}</p>
            </Grid>
            <Grid item xs={6} md={6}>
                <TwitterIcon/>
                <p>{twitter}</p>
            </Grid>
            <Grid item xs={6} md={6} sx= {{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                <LanguageIcon sx={{justifySelf: 'center', width:'100%'}}></LanguageIcon>
                <Link href={website} underline="none" color="inherit">
                    {website}
                </Link>
            </Grid>
            <Grid item xs={6} md={6}>
                <BusinessIcon/>
                <p>{company}</p>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default footer