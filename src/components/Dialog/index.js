import { createContext, createElement, useContext, useRef } from 'react';
import { useDialog } from 'react-aria';

const DialogContext = createContext(null);

export const useDialogContext = () => {
  const result = useContext(DialogContext);
  if (result === null) {
    throw new Error('Should be used within <Dialog>');
  }
  return result;
};

export const Dialog = (props) => {
  const ref = useRef();
  const { className, children } = props;
  const { titleProps, dialogProps } = useDialog(props, ref);
  return (
    <div className={className} {...dialogProps} ref={ref}>
      <DialogContext.Provider value={{ titleProps }}>
        {children}
      </DialogContext.Provider>
    </div>
  );
};

export const DialogTitle = ({ className, children, as = 'div' }) => {
  const { titleProps } = useDialogContext();
  const element = createElement(as, {
    className,
    ...titleProps,
  });
  return element;
};
