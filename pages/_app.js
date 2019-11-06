import React from 'react'
import App from 'next/app'
import { PostProvider } from '../lib/PostProvider'
// import Page from '../components/Page'


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
      <PostProvider>
        <Component {...pageProps} />
      </PostProvider>
    )
  }
}

export default MyApp