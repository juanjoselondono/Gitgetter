import React from 'react'
import {Container} from '@mui/material'
import Searcher from '@/components/Searcher/searcher'
import Content from '@/components/Content/content';
import { useState } from 'react';
import {getGithubUser} from '@/pages/api/user'
import { useEffect } from 'react';
import NotFound from '@/components/Notfound/notFound';

const index = () => {
  const [inputUser, setInputUser]= useState('octocat');
  const [userState, setUserState]= useState('inputUser')
  const [notFound, setNotFound]= useState(false)

  const getUser = async(user)=>{
    const userResponse = await getGithubUser(user)
    console.log(userResponse)
    setNotFound(false)
    if(userState === 'octocat'){
      localStorage.setItem('octocat', userResponse)
    }

    if(userResponse.message === 'Not Found'){
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  }

  useEffect(()=>{
    getUser(inputUser)
  },[inputUser])

  return (
    <Container maxWidth="lg" sx={
     {
       background:'whitesmoke',
       height: '110vh',
       justifyItems:'center',
       justifyContent:'center',
       textAlign:'center'    
     }
    }>
      <Searcher inputUser={inputUser} setInputUser = {setInputUser}></Searcher>
      {!notFound ? <Content userState = {userState}></Content>: null}
      {notFound ? <NotFound/> : null}
    </Container>
  )
}

export default index