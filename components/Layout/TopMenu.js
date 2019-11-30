import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
  Navbar, Nav, NavItem, NavButton, 
} from '../styles/Nav'
import Backdrop from '../styles/Backdrop'


const TopMenu = () => {
  const router = useRouter()
  const isActive = route => route === router.pathname
  const [menuOpen, setMenuOpen] = useState(false)


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
