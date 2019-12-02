import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
// import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import NProgress from 'nprogress'
import TopMenu from './TopMenu'
import SideProfile from '../SideProfile/SideProfile'
import { getUserInfo } from '../../lib/api'
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

const Layout = ({ children, ...rest }) => {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const fetUserInfo = async () => {
    const res = await getUserInfo()
    // console.log(res)
    // console.log(res)
    if (res.statusText === 'OK') {
      setUser(res.data.user)

    }
  }
  useEffect(() => {
    fetUserInfo()
    dispatch(fetchUserInfo())
  }, [])
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="semantic.min.css" /> */}
        {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> */}
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        /> */}
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
