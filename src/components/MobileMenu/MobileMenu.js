/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { CloseModal } from "../Modal";

const MobileMenuWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  gap: 32px;
  overflow: auto;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
`;

const MobileMenu = () => {
  return (
    <MobileMenuWrapper>
      <CloseModal>
        <UnstyledButton style={{ alignSelf: "end" }}>
          <Icon id="close" strokeWidth={2} />
        </UnstyledButton>
      </CloseModal>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
