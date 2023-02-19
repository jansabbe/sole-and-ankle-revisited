import styled from "styled-components/macro";
import { COLORS } from "../../constants";
import {
  Overlay,
  OverlayCloseToTrigger,
  Underlay,
  useModalContext,
  CloseModal,
} from "./Modal";
import { Dialog } from "../Dialog";

export { Modal, ModalTrigger, CloseModal } from "./Modal";

const DarkBackground = styled(Underlay)`
  background-color: rgba(96, 100, 108, 0.8);
`;

const SidePanel = styled(Dialog)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: ${COLORS.white};
`;

const BorderedPopover = styled(OverlayCloseToTrigger)`
  width: min(300px, 100% - 24px);
  background-color: ${COLORS.white};
  outline: none;
  padding: 12px;
  border: 1px solid ${COLORS.primary};
`;

export const SidePanelModal = ({ title, children }) => {
  const { state } = useModalContext();
  return state.isOpen ? (
    <DarkBackground>
      <Overlay>
        <SidePanel aria-label={title}>{children}</SidePanel>
      </Overlay>
    </DarkBackground>
  ) : null;
};

export const Popover = ({ children }) => {
  const { state } = useModalContext();
  return state.isOpen ? (
    <Underlay>
      <BorderedPopover>{children}</BorderedPopover>
    </Underlay>
  ) : null;
};
