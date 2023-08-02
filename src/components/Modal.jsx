import React, { useLayoutEffect, useEffect, useCallback } from 'react';
import styled from 'styled-components';

export default function Modal({ isOpen, setIsOpen, children }) {
  const handleClose = useCallback(() => setIsOpen(null), [setIsOpen]);

  useLayoutEffect(() => {
    // block scroll when modal open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);

      return () => document.removeEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleClose]);

  return (
    <ModalContainer className="modal" isOpen={isOpen}>
      <span
        role="presentation"
        className="modal__close"
        onClick={handleClose}
        onKeyDown={handleClose}>
        &times;
      </span>

      <div className="modal__content__container">
        <ModalContent className="modal__content">{children}</ModalContent>
      </div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: ${({ isOpen }) =>
    isOpen ? 'block' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 9998; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */

  .modal__close {
    z-index: 9999;
    position: absolute;
    top: 10px;
    right: 15px;
    color: #f1f1f1;
    font-size: 6vw;
    font-weight: bold;
    transition: 0.3s;

    &:hover,
    &:focus {
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }

    @media screen and (max-width: 768px) {
      font-size: 60px;
    }
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .modal__content__container {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;

    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }
`;

const ModalContent = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
