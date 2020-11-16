import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavWrapper, Logo, NavList, NavItem } from './styles';

const Navigation = () => (
  <NavWrapper>
    <Logo as={NavLink} to="/" />
    <NavList>
      <NavItem as={NavLink} to="/storage">
        my Storage
      </NavItem>
      <NavItem as={NavLink} to="/shopping">
        Shopping list
      </NavItem>
      <NavItem as={NavLink} to="/settings">
        Settings
      </NavItem>
    </NavList>
  </NavWrapper>
);

export default Navigation;
