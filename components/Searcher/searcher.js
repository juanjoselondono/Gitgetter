import React, { useState } from 'react'
import { Stack, TextField, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {getGithubUser} from '@/pages/api/user'

const searcher = (props) => {
  const{
      inputUser,
      setInputUser
  } = props;
  const [valueInput, setValueInput] = useState('')
  const [notFound, setNotFound]= useState(false)
  const onSearchValueChange =(event)=>{
      const inputValue = event.target.value
      setValueInput(inputValue)
  }
  const handlerSubmit =()=>{
    setInputUser(valueInput)
  }
  return (
      <Stack direction='row' sx={{
          marginTop: '5vh',
          width:'100%',
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignContent:'center'
      }}>
          <TextField id="outlined-basic" 
          placeholder='Octocat' 
          label="Github User" 
          variant="outlined" 
          value={valueInput}
          onChange={onSearchValueChange}
          sx = {{
              width: '100%',
              margin:'4vh'
          }}>
          </TextField>
          <IconButton
            onClick={handlerSubmit} 
            sx={{
                width:'50px',
                height:'50px',
                marginTop:'4vh',
                marginLeft:'5px',
                borderRadius:'10px',
                width:'10vh',
                backgroundColor:'#28a745'
            }}>
            <SearchIcon></SearchIcon>
          </IconButton>
      </Stack>
  )
}

export default searcher