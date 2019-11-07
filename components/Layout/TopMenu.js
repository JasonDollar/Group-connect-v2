import React from 'react'
// import { Menu } from 'semantic-ui-react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import { Navbar, Nav, NavItem } from '../styles/Nav'

const Anchor = styled.a`
  text-decoration: none;
`

const TopMenu = () => {
  const router = useRouter()
  const isActive = route => route === router.pathname
  // console.log(router.pathname)

  return (
    <Navbar>
      <Nav>
        <NavItem>
          <Link href="/group">
            <a>Groups</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/group">
            <a>Groups</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/group">
            <a>Groups</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/group">
            <a>Groups</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/group">
            <a>Groups</a>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default TopMenu
