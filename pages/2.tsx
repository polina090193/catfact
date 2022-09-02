import React from 'react';
import { Button } from 'rsuite';
import styled from 'styled-components'

const StyledButton = styled(Button)`
  background: beige;
`

const Two = () => (
  <div className="hero">
    <StyledButton appearance="primary" href="/">
      Back
    </StyledButton>
  </div>
);

export default Two
