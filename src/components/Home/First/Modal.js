import styled from 'styled-components';

export const Modalcontainer = styled.div`
  position: absolute;
  right: 35%;
  top: 35%;
  width: 30%;
  height: 10%;
  border: none;
  background-color: transparent;
  color: white;
  text-align: center;
  z-index: 1;
  cursor: pointer;
`;
export const ModalText = styled.p`
  textalign: center;
`;
export const ModalButton = styled.button`
  border: none;
  background-color: 'transparent';
  cursor: pointer;
`;

export const Modal = ({ setOnOff, currentIndex }) => {
  const modalhandler = () => {
    setOnOff(false);
  };

  const text = () => {
    if (currentIndex === 0) {
      return '첫번째장이니 뒤로 넘기세요 제바루~~';
    }
    if (currentIndex === 4) {
      return '마지막장이니 앞으로 가세요 제바루~~';
    } else {
      return 'X를 누르시면 이 창이 닫히는건 안비밀~';
    }
  };

  return (
    <Modalcontainer onClick={modalhandler}>
      <ModalText>{text()}</ModalText>
      <ModalButton onClick={modalhandler}>X</ModalButton>
    </Modalcontainer>
  );
};
