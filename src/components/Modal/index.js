import { createContext, useContext, useMemo, useRef } from 'react';
import { useOverlayTriggerState } from 'react-stately';
import { Overlay, useModalOverlay, useOverlayTrigger } from 'react-aria';
import styled from 'styled-components/macro';
import { COLORS } from '../../constants';

const ModalContext = createContext(null);

```
<Modal>
<ModalTrigger></ModalTrigger>
<ModalContentsBase>blabla</ModalContentsBase>
</Modal>

```;

export const Modal = ({ children }) => {
  const state = useOverlayTriggerState({});
  const ref = useRef();
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state
  );
  const { modalProps, underlayProps } = useModalOverlay({}, state, ref);
  const value = useMemo(
    () => ({
      state,
      triggerProps,
      overlayProps,
      modalProps,
      underlayProps,
      ref,
    }),
    [modalProps, overlayProps, state, triggerProps, underlayProps]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const useModalContext = () => {
  const result = useContext(ModalContext);
  if (result === null) {
    throw new Error('Should be used within <Modal>');
  }
  return result;
};

export const ModalContentsBase = ({ children }) => {
  const { state, underlayProps } = useModalContext();
  return state.open ? (
    <Overlay>
      <DarkBackground {...underlayProps}>{children}</DarkBackground>
    </Overlay>
  ) : null;
};

const DarkBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(96, 100, 108 / 0.8);
`;
