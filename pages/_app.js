import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { PostProvider } from '../lib/PostProvider'
import Layout from '../components/Layout/Layout'
import theme from '../components/styles/theme'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme.light}>
        <PostProvider>
          <Layout>
            <Component {...pageProps} />

          </Layout>
        </PostProvider>

      </ThemeProvider>
    )
  }
}

export default MyApp