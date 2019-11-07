import React, { useState } from 'react'
// import { Menu } from 'semantic-ui-react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import {
  Navbar, Nav, NavItem, NavButton, 
} from '../styles/Nav'
import Backdrop from '../styles/Backdrop'


const TopMenu = () => {
  const router = useRouter()
  const isActive = route => route === router.pathname
  const [menuOpen, setMenuOpen] = useState(false)
  // console.log(router.pathname)

  const handleLinkClick = e => {
    if (menuOpen === false) return
    if (e.target.nodeName.toLowerCase() === 'a') setMenuOpen(false)
  }

  return (
    <Navbar>
      {menuOpen && <Backdrop onClick={() => setMenuOpen(false)} />}
      <Nav className={menuOpen ? 'open' : ''} onClick={handleLinkClick}>
        <NavItem>
          <Link href="/group">
            <a>Groups</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/group/create">
            <a>Create Group</a>
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
      <NavButton type="button" className="onlyMobile" onClick={() => setMenuOpen(state => !state)}>X</NavButton>
    </Navbar>
  )
}

export default TopMenu
