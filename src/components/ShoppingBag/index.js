import { CloseModal, Modal, ModalTrigger, Popover } from '../Modal';
import UnstyledButton from '../UnstyledButton/UnstyledButton';
import Icon from '../Icon';
import { Dialog, DialogTitle } from '../Dialog';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 24px;
`;

const HeaderTitle = styled(DialogTitle)`
  margin-right: auto;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
`;
export const ShoppingBagButton = ({ strokeWidth }) => {
  return (
    <Modal>
      <ModalTrigger>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={strokeWidth} />
        </UnstyledButton>
      </ModalTrigger>
      <ShoppingPopover>
        <Dialog>
          <Header>
            <HeaderTitle as="h3">Shopping bag</HeaderTitle>
            <CloseModal>
              <UnstyledButton autoFocus>
                <Icon id="close" strokeWidth={2} />
              </UnstyledButton>
            </CloseModal>
          </Header>
          <ul>
            <ShoppingItem>
              <div>NikeCourt Tech Challenge 20</div>
              <div>$165</div>
            </ShoppingItem>
            <ShoppingItem>
              <div>Nike Metcon 5 AMP</div>
              <div>$165</div>
            </ShoppingItem>
          </ul>
        </Dialog>
      </ShoppingPopover>
    </Modal>
  );
};

const ShoppingItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  font-weight: ${WEIGHTS.normal};
  color: var(--color-gray-900);
`;

const ShoppingPopover = styled(Popover)`
  min-width: min(360px, 100%);
`;
