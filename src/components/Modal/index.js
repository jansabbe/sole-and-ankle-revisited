import styled from 'styled-components/macro';
import {
  Overlay,
  OverlayCloseToTrigger,
  Underlay,
  useModalContext,
  CloseModal,
} from './Modal';
import { Dialog } from '../Dialog';

export { Modal, ModalTrigger, CloseModal } from './Modal';

const DarkBackground = styled(Underlay)`
  background-color: var(--modal-background);
`;

const SidePanel = styled(Dialog)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: var(--color-white);
`;

const BorderedPopover = styled(OverlayCloseToTrigger)`
  width: min(300px, 100% - 24px);
  background-color: var(--color-white);
  outline: none;
  padding: 16px;
  border: 2px solid var(--color-gray-900);
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

export const Popover = ({ className, children }) => {
  const { state } = useModalContext();
  return state.isOpen ? (
    <Underlay>
      <BorderedPopover className={className}>{children}</BorderedPopover>
    </Underlay>
  ) : null;
};
