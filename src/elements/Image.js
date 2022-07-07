import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Image = ({ src, size, width, height, setImage, id, ...props }) => {
  const navigate = useNavigate();
  return (
    <Outter>
      <Inner
        {...props}
        src={src}
        size={size}
        width={width}
        height={height}
        onClick={() => {
          if (setImage) setImage(src);
          else if (id) navigate(`/productdetail/${id}`);
        }}
      />
    </Outter>
  );
};

Image.defaultProps = {
  src: 'https://cdn.pixabay.com/photo/2021/08/02/20/35/architecture-6517841_960_720.jpg',
  addstyle: () => {},
  onClick: () => {},
};

const Outter = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  cursor: pointer;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  object-fit: cover;
  width: ${props => (props.width ? props.width : props.size)}px;
  height: ${props => (props.height ? props.height : props.size)}px;
  ${props => props.addstyle()};
`;
export default Image;
