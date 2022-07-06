import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spinner = props => {
  const { visible } = props;
  if (!visible) {
    return null;
  }

  return (
    <div>
      <SpinnerBG>
        <SpinnerInner>
          <MainText>
            <p>
              R<span>U</span>
              <br />
              <span>S</span>H
            </p>
          </MainText>
          <SubText>Loading</SubText>
        </SpinnerInner>
      </SpinnerBG>
    </div>
  );
};

Spinner.propTypes = {
  visible: PropTypes.bool,
};

const SpinnerBG = styled.div`
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 1000;
`;

const MainText = styled.div`
  p {
    margin: 0px auto;
    font-size: 80px;
    font-weight: 900;
    color: black;
    span {
      color: black;
    }
  }
  -webkit-animation: focus-in-contract 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: focus-in-contract 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

const SubText = styled.p`
  font-size: 60px;
  font-weight: 700;
  color: black;
  margin: 20px auto;
`;

const SpinnerInner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
`;

export default Spinner;
