import styled from 'styled-components'

export const Navbar = styled.div`
  width: 100%;
  background: ${props => props.theme.dark};
  height: 5rem;
  /* vertical-align: center; */
  display: flex;
  /* justify-content: space-between;  */
`

export const Nav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 70%;
  z-index: 100;
  margin: 0;
  background: ${props => props.theme.dark};
  list-style: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform .3s;
  &.open {
    transform: translateX(0);
  }
  @media (min-width: 576px) {
    margin-right: 2rem;
    position: static;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    transform: translateX(0);
    z-index: 0;
    
  }
`

export const NavItem = styled.li`
padding: .5rem 1rem;
font-size: 2rem;
  & a:link, & a:visited {
    color: ${props => props.theme.textGray};
    text-decoration: none;
  }
  & a:hover, & a:active {
    color: ${props => props.theme.textWhite};
  }
`

export const NavButton = styled.button`
   margin: .5rem; 
   margin-left: auto;
  background: none;
  border: none;
   border-radius: 7px; 
  /* padding: ${props => (props.wide ? '.5rem 4rem' : '.5rem')}; */
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  font-family: inherit; 
`