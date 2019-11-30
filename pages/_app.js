import React from 'react'
import App from 'next/app'
import cookies from 'next-cookies'
import { ThemeProvider } from 'styled-components'
import { PostProvider } from '../lib/PostProvider'
import Layout from '../components/Layout/Layout'
import theme from '../components/styles/theme'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    const { jwt } = cookies(ctx)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    console.log('tokken_app', jwt)
    if (jwt) {
      pageProps.userToken = jwt
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme.light}>
        <PostProvider>
          <Layout {...pageProps}>
            <Component {...pageProps} />

          </Layout>
        </PostProvider>

      </ThemeProvider>
    )
  }
}

export default MyApp