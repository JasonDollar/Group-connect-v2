import React, { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import NProgress from 'nprogress'
import TopMenu from './TopMenu'
import { fetchUserInfo, stopLoadingUser } from '../../redux/user/user.actions'


Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Container = styled.div`
  width: 100%;
  max-width: 114rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
`

const Layout = ({ children, userToken }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken) {
      dispatch(fetchUserInfo())
    } else {
      dispatch(stopLoadingUser())
    } 
    
  }, [])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/nprogress.css" />
      </Head>
      <TopMenu />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout
