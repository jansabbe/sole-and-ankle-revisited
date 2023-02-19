import { CloseModal, Modal, ModalTrigger, Popover } from "../Modal";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import Icon from "../Icon";
import { Dialog, DialogTitle } from "../Dialog";
import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
`;

const HeaderTitle = styled(DialogTitle)`
  margin-right: auto;
  font-size: 1.125rem;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
`;
export const ShoppingBagButton = () => {
  return (
    <Modal>
      <ModalTrigger>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={2} />
        </UnstyledButton>
      </ModalTrigger>
      <Popover>
        <Dialog>
          <Header>
            <HeaderTitle>Shopping bag</HeaderTitle>
            <CloseModal>
              <UnstyledButton style={{ alignSelf: "end" }}>
                <Icon id="close" strokeWidth={2} />
              </UnstyledButton>
            </CloseModal>
          </Header>
          <ul>
            <li>Shooooesss</li>
            <li>Shooooesss</li>
            <li>Shooooesss</li>
            <li>Shooooesss</li>
            <li>Shooooesss</li>
            <li>Shooooesss</li>
            <li>Shooooesss</li>
            <li>Shooooesss</li>
            <button>hihi</button>
          </ul>
        </Dialog>
      </Popover>
    </Modal>
  );
};
