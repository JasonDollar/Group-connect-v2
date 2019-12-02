import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import NProgress from 'nprogress'
import TopMenu from './TopMenu'
import SideProfile from '../SideProfile/SideProfile'
import { fetchUserInfo } from '../../redux/user/user.actions'


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

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/nprogress.css" />
      </Head>
      <TopMenu />
      <Container>
        <SideProfile />
        {children}
      </Container>
    </>
  )
}

export default Layout
