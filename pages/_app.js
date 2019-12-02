import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { ThemeProvider } from 'styled-components'
import { PostProvider } from '../lib/PostProvider'
import Layout from '../components/Layout/Layout'
import theme from '../components/styles/theme'
import withReduxStore from '../lib/with-redux-store'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    const { jwt } = parseCookies(ctx)

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
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Provider store={reduxStore}>

        <ThemeProvider theme={theme.light}>
          <PostProvider>
            <Layout>
              <Component {...pageProps} />

            </Layout>
          </PostProvider>

        </ThemeProvider>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)