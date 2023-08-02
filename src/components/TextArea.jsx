import React from 'react';
import styled from 'styled-components';

function TextArea({ placeholder, ...rest }) {
  return <StyledTextArea placeholder={placeholder.toUpperCase()} {...rest} />;
}

const Textarea = (props) => <textarea {...props} />;

const StyledTextArea = styled(Textarea)`
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

  &:placeholder-shown {
    background-image: radial-gradient(red 15%, transparent 16%);
    background-size: 1em 1em;
    background-position: top right;
    background-repeat: no-repeat;
  }
`;
export default TextArea;
