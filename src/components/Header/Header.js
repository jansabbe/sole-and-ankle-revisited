import React from "react";
import styled from "styled-components/macro";
import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import { Modal, ModalTrigger, SidePanelModal } from "../Modal";
import { ShoppingBagButton } from "../ShoppingBag";

const Header = () => {
  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileNav>
          <ShoppingBagButton />
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <Modal>
            <ModalTrigger>
              <UnstyledButton>
                <Icon id="menu" strokeWidth={2} />
              </UnstyledButton>
            </ModalTrigger>
            <SidePanelModal title="Menu">
              <MobileMenu />
            </SidePanelModal>
          </Modal>
        </MobileNav>
        <Filler />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px var(--app-inline-padding);
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 12vw - 6rem, 6rem);
  margin: 0 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndDown} {
    flex: revert;
    margin-right: auto;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileNav = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: clamp(16px, 4vw, 40px);
  }
`;

export default Header;
