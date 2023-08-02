import React from 'react';
import styled from 'styled-components';

function Input({ placeholder, ...rest }) {
  return <StyledInput placeholder={placeholder.toUpperCase()} {...rest} />;
}

const StyledInput = styled.input`
  color: #fff;
  font-family: 'Exo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  background: #1d1d1d;
  padding: 24px;
  border: none;
  border-radius: 4px;
  width: 100%;

  &:placeholder {
    color: #ffffff;
    font-family: 'Exo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
  }

  // if placeholder shown that means it's empty
  &:placeholder-shown {
    background-image: radial-gradient(red 15%, transparent 16%);
    background-size: 1em 1em;
    background-position: top right;
    background-repeat: no-repeat;
  }
`;
export default Input;
