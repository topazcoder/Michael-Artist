import React from 'react';
import styled from 'styled-components';

export default function Button({ text, isLink, onClick = () => {}, ...rest }) {
  if (isLink) {
    return <StyledLink {...rest}>{text}</StyledLink>;
  }
  return (
    <StyledButton onClick={onClick} {...rest}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: #ea384e;
  border-radius: 4px;
  height: 60px;
  padding: 21px 36px;
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
`;

const StyledLink = styled.a`
  background: #ea384e;
  border-radius: 4px;
  height: 60px;
  padding: 21px 36px;
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  display: block;
  text-decoration: none !important;
`;
