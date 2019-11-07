import React from 'react'
import Head from 'next/head'
// import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import TopMenu from './TopMenu'

const Container = styled.div`
  width: 100%;
  max-width: 114rem;
  margin: 0 auto;
  padding: 1rem;
`

const Layout = ({ children }) => {
  's'

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
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <TopMenu />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout
