import React from 'react'
import {CardMedia, Divider, Grid,Card} from '@mui/material'
import {Typography} from '@mui/material'
import Footer from '../Footer/footer'

const content = (props) => {
  const {userState} = props
  const {avatar_url} = userState;
  const {name} = userState; 
  const {followers} = userState;
  const {public_repos} = userState;
  const {following} = userState;
  const {location}= userState;
  const {twitter_username} = userState;
  const {blog} = userState;
  const {company}= userState;
  return (
   <Grid container spacing={2}>
       <Grid item xs = {12} sx={{display:'flex', justifyContent:'center'}}>
           <CardMedia
            component="img"
            image = {avatar_url}
            alt ="Github User"
            sx={{
              borderRadius: '250px',
              width: '20vh', 
              height: '20vh',
              marginTop:'10vh',
           }} 
           />
      
       </Grid>
       <Grid item 
          xs = {12}
          sx={{
            textAlign:'center',
            alignSelf:'center',
            justifyContent:'center'
          }}
       >
          <Typography variant="h4">{name}</Typography>
          <Card variant="outlined" sx={{
            height:'15vh',
            display:'flex',
            alignItems: 'center',
            borderRadius:'20px'
          }}>
            <Grid container>
              <Grid item xs>
                <Typography variant="h6">Followers</Typography>
                {followers}
              </Grid>
              <Grid item xs>
                <Typography variant="h6">Repo</Typography>
                {public_repos}
              </Grid>
              <Grid item xs>
                <Typography variant="h6">Following</Typography>
                {following}
              </Grid>
            </Grid>
          </Card>
       </Grid>
       <Footer
          location = {location}
          website = {blog}
          company = {company}
          twitter = {twitter_username}
       />
   </Grid>
  )
}

export default content