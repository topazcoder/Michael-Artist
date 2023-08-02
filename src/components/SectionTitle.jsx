import React from 'react';
import styled from 'styled-components';

function SectionTitle({ title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>

      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Kodchasan', sans-serif;
  font-weight: 500;
  font-size: 60px;
  line-height: 60px;
  color: #000 !important;
  padding: 0;
  margin: 0;
`;

const Subtitle = styled.h4`
  font-family: 'Exo', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #6D6D6D; !important;
  padding: 10px;
  margin: 10px;
`;

export default SectionTitle;
