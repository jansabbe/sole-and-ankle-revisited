import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useMemo,
  useRef,
} from "react";
import {
  FocusScope,
  Overlay as Portal,
  useModalOverlay,
  useOverlayPosition,
  useOverlayTrigger,
  usePopover,
} from "react-aria";
import { useOverlayTriggerState } from "react-stately";

const ModalContext = createContext(null);

export const useModalContext = () => {
  const result = useContext(ModalContext);
  if (!result) {
    throw new Error("useModalContext within <Modal>");
  }
  return result;
};

export const Modal = (props) => {
  const { type = "dialog", children } = props;
  const triggerRef = useRef();
  const state = useOverlayTriggerState({});
  const { triggerProps, overlayProps: contentProps } = useOverlayTrigger(
    { type },
    state,
    triggerRef
  );

  const value = useMemo(
    () => ({
      state,
      triggerProps,
      contentProps,
      triggerRef,
    }),
    [contentProps, state, triggerProps]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const OverlayContext = createContext(null);

export const useOverlayContext = () => {
  const result = useContext(OverlayContext);
  if (!result) {
    throw new Error("useOverlayContext within <Underlay>");
  }
  return result;
};

export const Underlay = ({ className, isDismissable = true, children }) => {
  const { state } = useModalContext();
  const overlayRef = useRef();
  const { modalProps: overlayProps, underlayProps } = useModalOverlay(
    { isDismissable },
    state,
    overlayRef
  );

  return (
    <Portal>
      <div
        className={className}
        {...underlayProps}
        style={{ position: "fixed", inset: 0 }}
      >
        <OverlayContext.Provider value={{ overlayProps, overlayRef }}>
          {children}
        </OverlayContext.Provider>
      </div>
    </Portal>
  );
};

export const Overlay = ({ children, ...props }) => {
  const { contentProps } = useModalContext();
  const { overlayProps, overlayRef } = useOverlayContext();
  const element = Children.only(children);
  const overlay = cloneElement(element, contentProps);
  return (
    <div {...overlayProps} ref={overlayRef} {...props}>
      {overlay}
    </div>
  );
};

export const OverlayCloseToTrigger = ({ children, ...props }) => {
  const { state, triggerRef } = useModalContext();
  const { overlayRef } = useOverlayContext();
  const { overlayProps: positionProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef: overlayRef,
    placement: "bottom",
    offset: 8,
    isOpen: state.isOpen,
    containerPadding: 12,
  });
  return (
    <Overlay {...positionProps} {...props}>
      {children}
    </Overlay>
  );
};

export const ModalTrigger = ({ children }) => {
  const element = Children.only(children);
  const {
    triggerProps: { onPress, ...rest },
    triggerRef,
  } = useModalContext();
  return cloneElement(element, {
    onClick: onPress,
    ref: triggerRef,
    ...rest,
  });
};

export const CloseModal = ({ children }) => {
  const { state } = useModalContext();
  return cloneElement(children, { onClick: () => state.close() });
};
