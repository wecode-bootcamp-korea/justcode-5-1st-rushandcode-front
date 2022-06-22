import React from 'react';
import styled from 'styled-components';

const Image = ({ src, size, width, height, ...props }) => {
  return (
    <Outter>
      <Inner {...props} src={src} size={size} width={width} height={height} />
    </Outter>
  );
};

Image.defaultProps = {
  src: 'https://cdn.pixabay.com/photo/2021/08/02/20/35/architecture-6517841_960_720.jpg',
  addstyle: () => {},
};

const Outter = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  position: relative;
  cursor: pointer;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  width: ${props => (props.width ? props.width : props.size)}px;
  height: ${props => (props.height ? props.height : props.size)}px;
  ${props => props.addstyle()};
`;
export default Image;
