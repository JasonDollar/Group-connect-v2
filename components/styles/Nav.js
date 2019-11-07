import styled from 'styled-components'

export const Navbar = styled.div`
  width: 100%;
  background: ${props => props.theme.dark};
  height: 5rem;
  /* vertical-align: center; */
  /* display: flex;
  align-items: center; */
`

export const Nav = styled.ul`
  margin: 0;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
list-style: none;
`

export const NavItem = styled.li`
padding: .5rem 1rem;
  & a:link, & a:visited {
    color: ${props => props.theme.textGray};
    text-decoration: none;
  }
  & a:hover, & a:active {
    color: ${props => props.theme.textWhite};
  }
`
