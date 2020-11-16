import styled from 'styled-components';
import logo from 'assets/logo.png';

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 3rem;
`;

export const NavList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 85%;
`;

export const NavItem = styled.li`
  text-decoration: none;
  text-transform: lowercase;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.grey};
  &.active {
    color: ${({ theme }) => theme.dark};
    font-weight: ${({ theme }) => theme.bold};
  }
`;

export const Logo = styled.div`
  display: inline-block;
  width: 7rem;
  height: 7rem;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
`;
