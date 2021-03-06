import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import {
  Navbar, Nav, NavItem, NavButton, AvatarContainer, ProfileLink,
} from '../styles/Nav'
import Backdrop from '../styles/Backdrop'
import { selectCurrentUser } from '../../redux/user/user.selectors'



const TopMenu = () => {
  const router = useRouter()
  // const isActive = route => route === router.pathname
  const [menuOpen, setMenuOpen] = useState(false)
  const currentUser = useSelector(selectCurrentUser)

  const handleLinkClick = e => {
    if (menuOpen === false) return
    if (e.target.nodeName.toLowerCase() === 'a') setMenuOpen(false)
  }

  return (
    <Navbar>
      {menuOpen && <Backdrop onClick={() => setMenuOpen(false)} />}
      <Nav className={menuOpen ? 'open' : ''} onClick={handleLinkClick}>
        <NavItem>
          <Link href="/">
            <a>Home</a>
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

        {currentUser && (
          <NavItem>
            <Link href="/profile">

              <ProfileLink>
                <AvatarContainer>
                  <img src={currentUser.avatar || '/user.png'} alt="User's avatar" />
                </AvatarContainer>
                {currentUser.name || 'Not logged in'}
              </ProfileLink>

            </Link>
          </NavItem>
        )}
        {!currentUser && (
          <>
            <NavItem>
              <Link href="/signup">
                <a>Register</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/signin">
                <a>Login</a>
              </Link>
            </NavItem>
          </>
        )}
      </Nav>
      <NavButton type="button" className="onlyMobile" onClick={() => setMenuOpen(state => !state)}>X</NavButton>
    </Navbar>
  )
}

export default TopMenu
